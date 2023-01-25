import { PropsWithChildren } from "react";

type SlugtainerProps = {};

export default function Slugtainer({
  children,
}: PropsWithChildren<SlugtainerProps>) {
  return (
    <div className="bg-gradient-to-b from-[#47d400] to-[#DFFc21] p-1 rounded-xl w-full">
      <div className="w-full h-full bg-slate-100 rounded-xl p-4">
        {children}
      </div>
    </div>
  );
}
