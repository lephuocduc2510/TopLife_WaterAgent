import { useState, useEffect } from 'react'
import { waterService } from '../services/waterService'

export const useWaterData = () => {
  const [waterQuality, setWaterQuality] = useState(null)
  const [waterUsage, setWaterUsage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchWaterQuality = async () => {
    try {
      setLoading(true)
      const data = await waterService.getWaterQuality()
      setWaterQuality(data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch water quality data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchWaterUsage = async (startDate, endDate) => {
    try {
      setLoading(true)
      const data = await waterService.getWaterUsage(startDate, endDate)
      setWaterUsage(data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch water usage data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWaterQuality()
  }, [])

  return {
    waterQuality,
    waterUsage,
    loading,
    error,
    fetchWaterQuality,
    fetchWaterUsage,
  }
}
