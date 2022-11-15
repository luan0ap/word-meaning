import React, { useEffect } from 'react'
import { Grid, GridProps } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

export interface InfiniteScrollGridProps extends GridProps {
  onViewChange?: () => void
}

export function InfiniteScrollGrid({
  onViewChange = () => void 0,
  children,
  maxHeight = 'xl',
  templateColumns = ['repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)'],
  gap = 0,
  ...props
}: InfiniteScrollGridProps) {
  const { ref, inView } = useInView()

  useEffect(() => {
    onViewChange()
  }, [onViewChange, inView])

  return (
    <Grid
      templateColumns={templateColumns}
      gap={gap}
      overflowY="scroll"
      maxHeight={maxHeight}
      {...props}>
      {children}
      <div ref={ref} />
    </Grid>
  )
}

export default InfiniteScrollGrid
