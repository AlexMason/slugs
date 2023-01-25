import { useState } from "react";
import RouteList from "./components/RouteList";
import Slugtainer from "./components/Slugtainer";
import "./index.css";
import { useMainStore } from "./stores/main";

function App() {
  const deploymentCode = useMainStore((state) => state.deploymentCode);
  const setDeploymentCode = useMainStore((state) => state.setDeploymentCode);

  try {
    new Function(deploymentCode)();
  } catch (e) {}

  return (
    <div className="container mx-auto flex flex-col gap-5 py-10">
      <div className="font-creepster text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#47d400] to-[#DFFc21]">
        SLUGS
      </div>
      <div dangerouslySetInnerHTML={{ __html: deploymentCode }} />
      <div className="flex flex-row gap-5">
        <Slugtainer>
          <h2 className="text-xl underline pb-2 text-center">Routes</h2>
          <RouteList />
        </Slugtainer>
        <Slugtainer>
          <h2 className="text-xl underline pb-2 text-center">Properties</h2>
          <div className="flex gap-1">
            <select name="prop_type" id="">
              <option value="">Cookie</option>
              <option value="">JS Expression</option>
            </select>
            <input
              type="text"
              name=""
              id=""
              placeholder="Key"
              className="w-full"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Value"
              className="w-full"
            />
          </div>
        </Slugtainer>
      </div>
      <Slugtainer>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl underline pb-2 text-center">
            Deployment Code (Copy and paste snippet here)
          </h2>
          <textarea
            className="w-full border-2 resize-none"
            rows={10}
            value={deploymentCode}
            onChange={(e) => {
              setDeploymentCode(e.target.value);
            }}
          ></textarea>
        </div>
      </Slugtainer>
    </div>
  );
}

export default App;
