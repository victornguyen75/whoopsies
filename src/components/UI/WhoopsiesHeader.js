import React from "react";
import Button from "@material-ui/core/Button";
import Assignment from "@material-ui/icons/Assignment";

export default function WhoopsiesHeader() {
  return (
    <>
      <h1>Whoopsies!</h1>
      <p>
        {"An Issue Tracker for all your Oopsies! "}
        <Button variant="outlined" color="primary" startIcon={<Assignment />}>
          <a
            href="https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            SRS
          </a>
        </Button>
      </p>
    </>
  );
}
