import React from 'react'
import Category from './Category'

import {SearchTable} from '@/components'
import { books_data } from '@/util/aux_data'

interface compProps{

}

export default function SearchView({}:compProps) {
  return (
    <div className="w-full" style={{ animation: "slide_up 1s ease" }}>
      <Category />
      <SearchTable book_data={books_data} />
    </div>
  );
}
