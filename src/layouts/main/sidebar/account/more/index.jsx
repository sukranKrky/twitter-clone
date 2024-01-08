import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hoooks";
import { setCurrentAccount } from "../../../../../store/auth/actions";

export default function More({ close }) {
  const currentAccount = useAccount();
  const accounts = useAccounts();
  return (
    <div className="bg-[color:var(--background-primary)]   ">
      {accounts.map((account) => (
        <button
          type="button"
          disabled={currentAccount.id === account.id}
          onClick={() => (setCurrentAccount(account), close())}
          className={classNames(
            "py-3 px-4 flex text-left   w-full transition-colors",
            {
              "hover:bg-[color:var(--background-secondary)]": currentAccount.id !== account.id,
            }
          )}
        >
          <img src={account.avatar} alt="" className="w-10 h-10 rounded-full" />

          <div className="mx-3 ">
            <h6 className="font-bold leading-[1.25rem]">{account.fullName} </h6>

            <div className=" text-[color:var(--color-base-secondary)] leading-[20px]">
              @{account.userName}
            </div>
          </div>
          {currentAccount.id === account.id && (
            <svg
              viewBox="0 0 24 24"
              className="mr-2 ml-9 h-[1.172rem]"
              fill="#00ba7c"
            >
              <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
            </svg>

          )}
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3" />
      <button className="py-3 px-4 text-left transition-color hover:bg-[color:var(--background-secondary)] w-full   font-black leading-[1.25rem]">
        Var olan bir hesap ekle
      </button>
      <button className="py-3 px-4 text-left transition-color hover:bg-[color:var(--background-secondary)] w-full   font-black leading-[1.25rem]">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 text-left transition-color hover:bg-[color:var(--background-secondary)] w-full   font-black leading-[1.25rem]">
        <div className="max-w-[228px">@{currentAccount.userName} hesabından çıkış yap</div>

        {/* {accounts.map(account=>{
       <p> {account.useName}hesabından çikiş yap</p> 
    })} */}
      </button>
    </div>
  );
}
