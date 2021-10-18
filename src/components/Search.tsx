import Link from "next/link";
import { useRouter } from "next/router";

import { useCallback, useState } from "react";

import { FiSearch } from "react-icons/fi";

export default function Search() {
  const router = useRouter();
  const [textSearch, setTextSearch] = useState("");

  const searchFunction = useCallback(() => {
    if (textSearch !== "") {
      router.push(`/?search=${textSearch}`);
    }
  }, [textSearch]);

  return (
    <div className="containerSearch">
      <Link href="/">
        <img
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
          alt="Mercado Livre"
        />
      </Link>

      <div>
        <input
          type="text"
          id="inputSearch"
          placeholder="Nunca dejes de buscar"
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const key = e.target as HTMLInputElement;
            setTextSearch(key.value);

            if (e.key === "Enter") {
              searchFunction();
            }
          }}
        />

        <button type="button" onClick={searchFunction}>
          <FiSearch size="30" />
        </button>
      </div>
    </div>
  );
}
