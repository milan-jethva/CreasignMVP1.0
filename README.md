Creasign – AI Product Visual Generator

Note: The backend of this app is not always live. It runs on a local server exposed via ngrok, which means:
The /generate/ API works only when the developer is running the server.
If the backend is offline, image generation requests will fail or timeout.
This is intentional during the development phase.
To see what kind of output this app can generate, jump to the output example at the end of this file

🚀 [Live App](https://creasign.vercel.app) | 🧠 Built with FastAPI + Gemini + ControlNet

Creasign is an AI-powered tool that instantly generates scroll-stopping promotional graphics for your product. Just upload an image and description — we handle the rest using prompt optimization, AI image generation, and realistic blending.

Key Highlights

- Backend: Custom FastAPI application built as a model-style architecture and served live via pyngrok
- Prompt Engine: Uses LangChain with Google Gemini Flash to optimize creative prompts
- Frontend: Fully designed using AI-assisted UI generation for clean, modern UX
- Image AI: Combines Stable Diffusion XL + ControlNet Canny for dynamic background creation
- Realistic Results: Adds shadows, lighting, and product blending for polished, professional visuals

Live App

🔗 [https://creasign.vercel.app](https://creasign.vercel.app)

Tech Stack Overview

| Layer        | Tech Used                                |
|--------------|-------------------------------------------|
| Frontend     | React.js, Vite, Tailwind CSS (AI-designed)|
| Backend      | FastAPI, pyngrok (for local tunnel)       |
| AI Prompting | LangChain + Google Gemini Flash           |
| Image Gen    | Stable Diffusion XL + ControlNet (Canny)  |
| Other Tools  | OpenCV, Torch, PIL, UUID, uvicorn, etc.   |

How It Works

1. Upload a product image (preferably PNG with transparency)
2. Describe your product in a short sentence
3. Creasign:
   - Optimizes your text with Gemini via LangChain
   - Generates a Canny map from your image
   - Feeds prompt + map into ControlNet + SDXL
   - Merges your product onto an AI-generated background
4. Returns a ready-to-share, photorealistic product post

Example 1 -
Input - ![Input](https://github.com/user-attachments/assets/2bebaa93-c147-45d2-b0a0-a96ec1292cf0)

output - ![Output](https://github.com/user-attachments/assets/735a69be-2bcb-48fc-a734-0f7b6baa72e0)

Example 2 -
Input - ![Input](https://github.com/user-attachments/assets/b526496a-cf98-4d71-8427-309aafba8813)

Output -![output](https://github.com/user-attachments/assets/7e36a0f4-e1c3-4763-8022-80c3578f233d)

