import { UserButton, currentUser } from "@clerk/nextjs";


export default async function Home() {
  const loggedInUserData = await currentUser();


  
  return (
    <div className="p-10">

      <div className="flex flex-col gap-3 text-3xl">
        <UserButton afterSignOutUrl="/s text-3xlin" />
        <span>First Name: 
          {loggedInUserData?.firstName}
        </span>
        <span>Last Name : 
        {loggedInUserData?.lastName}
        </span>
        <span>Username :
        {loggedInUserData?.username}
        </span>
        <span>Email</span>
      </div>
    </div>
  );
}
