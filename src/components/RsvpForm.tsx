'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { RsvpFormData } from '@/types/rsvp'

export default function RsvpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<RsvpFormData>({
    name: '',
    email: '',
    attending: null,
    attending_names: [],
    comments: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.attending === null) {
      newErrors.attending = 'Please select whether you will be attending'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAttendingNamesChange = (index: number, value: string) => {
    const updatedNames = [...formData.attending_names]
    updatedNames[index] = value
    setFormData(prev => ({
      ...prev,
      attending_names: updatedNames
    }))
  }

  const addAttendingName = () => {
    setFormData(prev => ({
      ...prev,
      attending_names: [...prev.attending_names, '']
    }))
  }

  const removeAttendingName = (index: number) => {
    const updatedNames = formData.attending_names.filter((_, i) => i !== index)
    setFormData(prev => ({
      ...prev,
      attending_names: updatedNames
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const submitData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        attending: formData.attending!,
        attending_names: formData.attending === true
          ? [formData.name.trim(), ...formData.attending_names.filter(name => name.trim()).map(name => name.trim())]
          : null,
        comments: formData.comments.trim() || null
      }

      const { error } = await supabase
        .from('Wedding Guest List')
        .insert([submitData])

      if (error) {
        console.error('Supabase error:', error)
        setErrors({ submit: 'Failed to submit RSVP. Please try again.' })
      } else {
        router.push('/rsvp/thank-you')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({ submit: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            placeholder="Enter your full name"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            placeholder="Enter your email address"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Attending Field */}
        <div>
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-3">
              Will you be attending? *
            </legend>
            <div className="space-y-3">
              <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === true}
                  onChange={() => setFormData(prev => ({
                    ...prev,
                    attending: true
                  }))}
                  className="h-4 w-4 text-accent border-gray-300 focus:ring-accent focus:ring-offset-0"
                />
                <span className="ml-3 text-gray-700 font-medium">Yes, I'll be there! 🎉</span>
              </label>
              <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === false}
                  onChange={() => setFormData(prev => ({
                    ...prev,
                    attending: false,
                    attending_names: []
                  }))}
                  className="h-4 w-4 text-accent border-gray-300 focus:ring-accent focus:ring-offset-0"
                />
                <span className="ml-3 text-gray-700 font-medium">Sorry, I can't make it</span>
              </label>
            </div>
            {errors.attending && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.attending}
              </p>
            )}
          </fieldset>
        </div>

        {/* Additional Attendees Field */}
        {formData.attending === true && (
          <div>
            <div className="space-y-3">
              {formData.attending_names.length > 0 && (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional attendees:
                  </label>
                  <div className="space-y-3">
                    {formData.attending_names.map((name, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => handleAttendingNamesChange(index, e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          placeholder="Guest name"
                          aria-label={`Additional attendee ${index + 1} name`}
                        />
                        <button
                          type="button"
                          onClick={() => removeAttendingName(index)}
                          className="px-3 py-3 text-red-600 hover:text-red-800 transition-colors"
                          aria-label={`Remove attendee ${index + 1}`}
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <button
                type="button"
                onClick={addAttendingName}
                className="flex items-center gap-2 px-4 py-2 text-accent hover:text-accent/80 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add another person
              </button>
            </div>
          </div>
        )}

        {/* Comments Field */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
            Any comments?
          </label>
          <textarea
            id="comments"
            value={formData.comments}
            onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-vertical"
            placeholder="Let us know about dietary restrictions, allergies, song requests, or anything else we should know!"
          />
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600" role="alert">
              {errors.submit}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-white py-4 px-6 rounded-lg font-medium hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </div>
          ) : (
            'Submit RSVP'
          )}
        </button>
      </form>
    </div>
  )
}