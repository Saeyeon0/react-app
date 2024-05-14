import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New  York", "Tokyo", "Paris", "London", "Seoul"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        {/* Hello <span>World</span> */}
        my alert
      </Alert>}
      <Button
        color="secondary"
        onClick={() => setAlertVisibility(true)}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
