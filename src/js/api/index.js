// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.
import attendanceData from "../../attendance.json";

export const fetchAttendanceData = () => {
    return attendanceData;
}
