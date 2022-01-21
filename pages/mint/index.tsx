import React, { useState } from 'react';
import { NextPage } from 'next';
import { PageLayout } from '../../components/layout/PageLayout';
import { create } from 'ipfs-http-client';
import { Image, Stack } from 'react-bootstrap';
import { Highlight } from '../../components/layout/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { useUGETANFTContract } from '../../features/web3/hooks/contract/useContract';
import { Button, UploadButton } from '../../components/styled/Button.styled';
import { useActiveWeb3React } from '../../features/web3/hooks/network/useEagerConnect';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons/faCompactDisc';
import { faHandPeace } from '@fortawesome/free-regular-svg-icons';

/* Create an instance of the client */
const client = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

const Dashboard: NextPage = () => {
  const { account } = useActiveWeb3React();
  const contract = useUGETANFTContract();

  const [fileUrl, updateFileUrl] = useState(``);
  const [jsonUrl, setJsonUrl] = useState(``);
  const [uploading, setUploading] = useState(false);
  const [minting, setMinting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onChange(e: any) {
    const file = e.currentTarget?.files[0];
    try {
      setUploading(true);
      const image = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${image.path}`;
      const json = JSON.stringify({
        image: url,
      });
      const metadata = await client.add(json);
      updateFileUrl(url);
      setJsonUrl(metadata.path);
      setUploading(false);
    } catch (error) {
      console.log('Error uploading file: ', error);
      setUploading(false);
    }
  }

  const handleMintClick = async () => {
    setSuccess(false);
    if (!account || !contract || !jsonUrl.length) return;
    setMinting(true);
    try {
      const tx = await contract.mint(account, jsonUrl);
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        setMinting(false);
        setSuccess(true);
      } else {
        setSuccess(false);
        setMinting(false);
      }
    } catch (e) {
      console.log('failed..,.', e);
      setMinting(false);
      setSuccess(false);
    }
  };

  return (
    <PageLayout>
      <h1 className="text-center">
        Mint any image as an <Highlight>NFT ;)</Highlight>
      </h1>
      <div className="text-center py-5">
        <UploadButton>
          <input type="file" onChange={onChange} />
          <Stack direction="horizontal" gap={3}>
            <FontAwesomeIcon
              spin={uploading}
              icon={uploading ? faCompactDisc : faUpload}
              size="2x"
            />
            <span>Upload Your Image</span>
          </Stack>
        </UploadButton>
      </div>
      <div className="text-center">
        {fileUrl && (
          <Image
            alt="NFT"
            src={fileUrl}
            className="img-fluid"
            style={{ maxHeight: '20rem' }}
          />
        )}
      </div>
      <div className="text-center my-5">
        {jsonUrl && (
          <Button jumbo onClick={handleMintClick}>
            <Stack direction="horizontal" gap={3}>
              <FontAwesomeIcon
                spin={minting}
                icon={minting ? faCompactDisc : faHandPeace}
                size="2x"
              />
              <span>
                {minting ? 'MINTING IN PROGRESS...' : 'MINT YOUR NFT'}
              </span>
            </Stack>
          </Button>
        )}
      </div>
      {success && (
        <div className="my-5 text-center">
          <h2>
            <Highlight>Your NFT Was Successfully Minted!</Highlight>
          </h2>
        </div>
      )}
    </PageLayout>
  );
};

export default Dashboard;
