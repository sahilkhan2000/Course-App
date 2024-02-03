import React from "react";
import { Card, CardBody, Container } from "reactstrap";

function Header() {
  return (
    <div>
      <Container>
        <Card className="mt-2 bg-warning">
          <CardBody>
            <h1 className="text-center my-1">Welcome To Course Application</h1>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default Header;
