import React, { FunctionComponent, useEffect, useState } from "react";
import mp from "mixpanel-browser";

const Mixpanel: FunctionComponent = () => {
  const [mixpanel, setMixpanel] = useState<typeof mp>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!mixpanel) {
      setMixpanel((window as any).mixpanel);
      (window as any).mixpanel?.set_config({ debug: true });
    }
  });

  const [userId, setUserId] = useState("");
  const [alias, setAlias] = useState("");
  const [eventName, setEventName] = useState("");
  const [properties, setProperties] = useState<
    { key: string; value: string }[]
  >([
    { key: "Name", value: "" },
    { key: "$name", value: "" },
    { key: "", value: "" },
  ]);
  const [superPropKey, setSuperPropKey] = useState("");

  const setProperty = (
    index: number,
    toSet: { key?: string; value?: string }
  ) => {
    const p = [...properties];
    if (toSet.key !== undefined) p[index].key = toSet.key;
    if (toSet.value !== undefined) p[index].value = toSet.value;
    setProperties(p);
  };

  return (
    <>
      <h1>Mixpanel</h1>
      <div
        style={{ border: "1px solid red", margin: "20px 0", padding: "10px" }}
      >
        <h2>Identify</h2>
        UserID:
        <input
          value={userId}
          onChange={(e) => setUserId(e.currentTarget.value)}
        />
        <br />
        <button onClick={() => mixpanel?.identify(userId)}>Save profile</button>
      </div>
      <div
        style={{ border: "1px solid red", margin: "20px 0", padding: "10px" }}
      >
        <h2>Alias</h2>
        Alias:
        <input
          value={alias}
          onChange={(e) => setAlias(e.currentTarget.value)}
        />
        <br />
        <button
          onClick={() => mixpanel?.alias(alias, mixpanel.get_distinct_id())}
        >
          Add alias
        </button>
      </div>
      <div
        style={{ border: "1px solid red", margin: "20px 0", padding: "10px" }}
      >
        <h2>New event</h2>
        Event name:
        <input
          value={eventName}
          onChange={(e) => setEventName(e.currentTarget.value)}
        />
        <br />
        <button onClick={() => mixpanel?.track(eventName)}>Send event</button>
      </div>
      <div
        style={{ border: "1px solid red", margin: "20px 0", padding: "10px" }}
      >
        <h2>Set properties</h2>
        {properties.map(({ key, value }, index) => (
          <div
            key={index}
            style={{
              border: "1px solid blue",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            Key:
            <input
              value={key}
              onChange={(e) =>
                setProperty(index, { key: e.currentTarget.value })
              }
            />
            Value:
            <input
              value={value}
              onChange={(e) =>
                setProperty(index, { value: e.currentTarget.value })
              }
            />
          </div>
        ))}
        <button
          onClick={() =>
            mixpanel?.people?.set(
              properties.reduce(
                (acc, { key, value }) => ({ ...acc, [key]: value }),
                {}
              )
            )
          }
        >
          Save properties
        </button>
        <button
          onClick={() =>
            mixpanel?.register(
              properties.reduce(
                (acc, { key, value }) => ({ ...acc, [key]: value }),
                {}
              )
            )
          }
        >
          Register super properties
        </button>
      </div>
      <div
        style={{ border: "1px solid red", margin: "20px 0", padding: "10px" }}
      >
        <h2>Get super property</h2>
        Key:
        <input
          value={superPropKey}
          onChange={(e) => setSuperPropKey(e.currentTarget.value)}
        />
        <br />
        <b>Property: </b>
        {mixpanel?.get_property(superPropKey)}
      </div>
    </>
  );
};

export default Mixpanel;
