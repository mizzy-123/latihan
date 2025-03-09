export default function Header() {
  return (
    <header className="h-[100px] w-full flex items-center pl-[54px] pr-[100px]">
      <div className="flex items-center justify-around w-full">
        <img src="/image/logo.png" width={185} alt="" />
        <ul className="flex justify-stretch items-center gap-x-[75px]">
          <li>
            <a href="#">
              <p className="font-medium">Home</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="font-medium">Shop</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="font-medium">About</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="font-medium">Contact</p>
            </a>
          </li>
        </ul>
        <ul className="flex justify-stretch items-center gap-x-[45px]">
          <li>
            <a href="#">
              <img src="/svg/mdi_account-alert-outline.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/svg/akar-icons_search.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/svg/akar-icons_heart.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/svg/ant-design_shopping-cart-outlined.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
