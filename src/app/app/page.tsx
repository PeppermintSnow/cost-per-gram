import UserTable from "@/components/userTable/UserTable";

const App = (): React.ReactNode => {
  return (
    <>
      <p className="text-gray-700 mt-5 text-center">
        This app is a work in progress.
        <br />
        It is best experienced on desktop devices.
      </p>
      <UserTable />
    </>
  );
}

export default App;
