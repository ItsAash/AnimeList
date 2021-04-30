import { CircularProgress } from "@material-ui/core";
import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
}
