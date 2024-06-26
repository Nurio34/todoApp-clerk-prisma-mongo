import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Sidebar() {
    return (
        <nav className="my-[2vh] mx-[4vw] py-[2vh] px-[4vw] border-[1px] border-primary shadow-md shadow-primary">
            <div>
                <SignedOut>
                    <button type="button" className=" btn btn-primary">
                        <SignInButton />
                    </button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}

export default Sidebar;
