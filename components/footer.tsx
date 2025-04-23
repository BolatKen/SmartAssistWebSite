import Link from 'next/link'
import { Brain, Instagram, MessageCircle, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0d0f14] border-t border-[#2b2f38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-[#ffffff]" />
              <span className="font-space-grotesk text-xl font-bold">SmartAssist</span>
            </Link>
            <p className="text-sm text-gray-400">
              Intelligent AI assistant for business automation, designed for small and medium-sized businesses.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">Phone:</span> +7 (777) 777 77 77
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">Email:</span> hello@smartassist.ai
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/smartassist.ai" className="text-gray-400 hover:text-[#ffffff] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://t.me/smartassist" className="text-gray-400 hover:text-[#ffffff] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/smartassist" className="text-gray-400 hover:text-[#ffffff] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/features" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Features
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Pricing
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    About
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Blog
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Documentation
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/support" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Support
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-[#ffffff] transition-colors relative group"
                >
                  <span className="relative">
                    Terms of Service
                    <span className="absolute inset-x-0 bottom-0 h-px bg-[#ffffff]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#2b2f38]">
          <p className="text-center text-gray-400 text-sm">
            © 2025 SmartAssist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}