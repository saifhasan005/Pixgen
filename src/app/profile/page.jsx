'use client'
import { UpdateUserModal } from "@/Components/Modal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


const ProfilePage = () => {
    const userData = authClient.useSession();
      const user = userData.data?.user;
    return (
        <div>
           <h2>Profile Page</h2>
           <Card className="mt-[5px] border max-w-96 mx-auto flex flex-col items-center">
            <Avatar className="h-20 w-20">
                <Avatar.Image  src={user?.image} alt={user?.name}
                referrerPolicy="no-referrer " />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <h2 className="font-semibold text-xl">{user?.name}</h2>
              <h2 className="font-semibold text-gray-400">{user?.email}</h2>
              <UpdateUserModal/>
           </Card>
        </div>
    );
};

export default ProfilePage;