import React, { ReactElement, useEffect, useState } from "react";
import { fakeApi } from "../api/service";

interface Props {}

export default function ApiKey({}: Props): ReactElement {
  const [apiKey, setApiKey] = useState<string[]>([]);
  useEffect(() => {
    const requestApiKey = async () => {
      let apiKey = await fakeApi();
      setApiKey(apiKey.DATA);
    };
    requestApiKey();
  }, []);

  return (
    <>
      <ul>
        {apiKey.map((api) => (
          <li key={api}>{api}</li>
        ))}
      </ul>
    </>
  );
}
