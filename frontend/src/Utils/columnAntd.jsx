import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ToFirstCapital } from "./helpers";

dayjs.extend(relativeTime);

export const logColumns = [
  {
    title: "Sr. No.",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Event Type",
    dataIndex: "event_type",
    key: "event_type",
  },
  {
    title: "Timestamp",
    dataIndex: "timestamp",
    key: "timestamp",
    ellipsis:true,
    render: (text) =>
      `${dayjs(text).fromNow()} (${new Date(text).toDateString()})`,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render:(text)=>ToFirstCapital(text)
  },
  {
    title: "Source IP",
    dataIndex: "source_ip",
    key: "source_ip",
  },
  {
    title: "Destination IP",
    dataIndex: "destination_ip",
    key: "destination_ip",
  },
  {
    title: "Details",
    ellipsis: true,
    dataIndex: "details",
    key: "details",
  },
];
