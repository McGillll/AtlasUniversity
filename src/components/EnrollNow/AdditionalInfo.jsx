import React from 'react'

export const AdditionalInfo = () => {
  return (
    <>
        <div className="mt-12 bg-blue-900 text-neutral-50 rounded-lg p-8">
          <h3 className="font-viga text-2xl font-bold mb-4">Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold mb-2">Application Review</h4>
              <p className="text-blue-100">We will review your application within 5-7 business days.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold mb-2">Interview Process</h4>
              <p className="text-blue-100">Selected candidates will be invited for an interview.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neutral-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold mb-2">Enrollment</h4>
              <p className="text-blue-100">Complete your enrollment and begin your journey with us.</p>
            </div>
          </div>
        </div>
    </>
  )
}
