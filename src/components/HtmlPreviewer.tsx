'use client'

import { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function HtmlPreviewer() {
  const [htmlCode, setHtmlCode] = useState<string>("")

  const handleOutput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value)
  }

  useEffect(() => {
    setHtmlCode('<h1>Welcome to HTML Previewer</h1>\n<p>Start typing your HTML code in the textarea above!</p>')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background px-4 py-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="font-bold text-2xl md:text-4xl lg:text-6xl mb-8 text-center text-primary"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          HTML Previewer
        </motion.h1>
        <motion.p 
          className="text-muted-foreground mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          made by HassanRJ
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-center font-bold text-lg md:text-xl mb-4 text-secondary">HTML</h2>
            <Textarea
              value={htmlCode}
              onChange={handleOutput}
              placeholder="Enter HTML code here..."
              className="w-full h-[300px] md:h-[400px] resize-none border-2 border-primary/50 focus:border-primary transition-colors duration-300"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className="text-center font-bold text-lg md:text-xl mb-4 text-secondary">Preview:</h2>
            <div
              className="text-primary border-2 border-primary/50 p-4 w-full h-[300px] md:h-[400px] overflow-auto bg-white rounded-md shadow-md"
              dangerouslySetInnerHTML={{ __html: htmlCode }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}