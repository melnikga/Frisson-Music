"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');


  return ( 
    <Input 
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e:any) => setValue(e.target.value)}
    />
  );
}
 
export default SearchInput;