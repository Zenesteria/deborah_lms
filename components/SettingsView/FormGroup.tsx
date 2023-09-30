import React from 'react'

export default function FormGroup({children}:{children:React.ReactNode}) {
  return (
    <div className="flex m-4 flex-col max-w-[500px] flex-1 lg:min-w-[400px]">
      {children}
    </div>
  );
}
