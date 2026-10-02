import { RecordTable } from "@taskasaur/ui/record-table";
import * as React from "react";
const View = ({ runtime }: any) =>
  React.createElement(RecordTable, { runtime, collection: "track" });
import type { CoreContext } from "@taskasaur/platform/plugin-sdk";
export default {
  async activate(context: CoreContext) {
    const ui = context.services.require<any>("core.ui");
    const runtime = context.services.require("core.workspace");
    return ui.registerSurface({
      id: "track",
      label: "Track",
      render: () => ui.React.createElement(View, { runtime }),
    });
  },
};
