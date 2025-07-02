'use client'

import { useState, KeyboardEvent, useEffect } from 'react'
import { Input, Button } from '@/shared/ui'
import * as styles from './SearchBar.css'

interface SearchBarProps {
  value: string
  onSearch: (query: string) => void
}

const SearchBar = ({ value, onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState(value)

  useEffect(() => {
    setSearchQuery(value)
  }, [value])

  const handleSearch = () => {
    onSearch(searchQuery.trim())
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }

  return (
    <div className={styles.container}>
      <Input
        placeholder="검색어를 입력하세요"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch} variant="secondary">
        🔍
      </Button>
    </div>
  )
} 

export default SearchBar