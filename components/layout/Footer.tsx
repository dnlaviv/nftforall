import React from 'react';
import styled from 'styled-components';
import { Col, Container, Navbar, Row, Stack } from 'react-bootstrap';
import { Text } from './Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';

const StyledFooter = styled.footer`
  height: ${({ theme }) => theme.measurements.footerHeight};
  color: #ffffff;
  background: ${({ theme }) => theme.footerBackground};
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Navbar className="h-100" variant="dark">
        <Container>
          <Row className="w-100">
            <Col className="d-flex align-items-center justify-content-center">
              <Text secondary>
                <Stack direction="horizontal" gap={2}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="me-3">
                    Built by{' '}
                    <StyledAnchor
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/fabdarice"
                    >
                      @fabdarice
                    </StyledAnchor>{' '}
                    &{' '}
                    <StyledAnchor
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/dnlaviv"
                    >
                      @dnlaviv
                    </StyledAnchor>{' '}
                    | Donations:{' '}
                    <strong style={{ color: '#fff' }}>
                      0xE7958Fc12152024E8b1cf7B42C69608A1F13bD33
                    </strong>
                  </span>
                </Stack>
              </Text>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </StyledFooter>
  );
};
