import api from './api'

export const waterService = {
  // Get water quality data
  getWaterQuality: async () => {
    try {
      const response = await api.get('/water/quality')
      return response.data
    } catch (error) {
      console.error('Error fetching water quality:', error)
      throw error
    }
  },

  // Get water usage data
  getWaterUsage: async (startDate, endDate) => {
    try {
      const response = await api.get('/water/usage', {
        params: { startDate, endDate }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching water usage:', error)
      throw error
    }
  },

  // Get water reports
  getReports: async () => {
    try {
      const response = await api.get('/water/reports')
      return response.data
    } catch (error) {
      console.error('Error fetching reports:', error)
      throw error
    }
  },

  // Submit water analysis
  submitAnalysis: async (analysisData) => {
    try {
      const response = await api.post('/water/analysis', analysisData)
      return response.data
    } catch (error) {
      console.error('Error submitting analysis:', error)
      throw error
    }
  }
}
