"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Sparkles, Zap, Shield, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [promptText, setPromptText] = useState("")
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!selectedFile || !promptText) {
      alert("Please upload a file and enter a description.")
      return
    }

    const formData = new FormData()
    formData.append("file", selectedFile)
    formData.append("product_description", promptText)

    try {
      setLoading(true)

      const response = await fetch("https://5bc0-34-125-154-147.ngrok-free.app/generate/", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setLoading(false)

      if (data.image_url) {
        setGeneratedImageUrl(data.image_url)
      } else {
        alert("Image generation failed.")
      }
    } catch (error) {
      console.error("❌ Error:", error)
      alert("Something went wrong.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Image Generation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Transform Your Ideas
            <br />
            Into Stunning Visuals
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Upload your product images and let our advanced AI create professional, marketing-ready visuals with just a
            simple description.
          </p>
        </div>
      </section>

      {/* AI Generator Section */}
      <section id="generator" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">AI Image Generator</CardTitle>
              <CardDescription className="text-lg">
                Upload your image and describe what you want to create
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Product Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-500">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </label>
                      {selectedFile && <p className="mt-2 text-sm text-green-600">✓ {selectedFile.name}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
                    <Textarea
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      placeholder="Describe the style, background, or modifications you want for your product image..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={loading || !selectedFile || !promptText}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Generate Image
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  {generatedImageUrl ? (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Generated Image</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <img src={generatedImageUrl || "/placeholder.svg"} alt="Generated" className="w-full h-auto" />
                      </div>
                      <Button asChild className="w-full" variant="outline">
                        <a href={generatedImageUrl} download target="_blank" rel="noopener noreferrer">
                          📥 Download Image
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Your generated image will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CREASIGN?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform delivers professional results with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Generate professional images in seconds with our optimized AI models</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your images and data are protected with enterprise-grade security</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Professional Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Marketing-ready images that meet professional standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
