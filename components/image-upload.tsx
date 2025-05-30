"use client"

import type React from "react"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, Check } from "lucide-react"

interface ImageUploadProps {
  onImageUploaded?: (url: string) => void
  folder?: string
}

export default function ImageUpload({ onImageUploaded, folder = "" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("Você deve selecionar uma imagem para fazer upload.")
      }

      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = folder ? `${folder}/${fileName}` : fileName

      const { error: uploadError } = await supabase.storage.from("portfolio-images").upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // Obter a URL pública da imagem
      const { data } = supabase.storage.from("portfolio-images").getPublicUrl(filePath)

      const publicUrl = data.publicUrl
      setUploadedUrl(publicUrl)

      if (onImageUploaded) {
        onImageUploaded(publicUrl)
      }
    } catch (error) {
      alert("Erro ao fazer upload da imagem!")
      console.error("Erro:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Input type="file" accept="image/*" onChange={uploadImage} disabled={uploading} className="flex-1" />
        <Button disabled={uploading} variant="outline">
          {uploading ? (
            <>
              <Upload className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </>
          )}
        </Button>
      </div>

      {uploadedUrl && (
        <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-sm text-green-700">Imagem enviada com sucesso!</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(uploadedUrl)
              alert("URL copiada para a área de transferência!")
            }}
          >
            Copiar URL
          </Button>
        </div>
      )}

      {uploadedUrl && (
        <div className="mt-4">
          <img src={uploadedUrl || "/placeholder.svg"} alt="Imagem enviada" className="max-w-xs rounded-lg shadow-md" />
        </div>
      )}
    </div>
  )
}
