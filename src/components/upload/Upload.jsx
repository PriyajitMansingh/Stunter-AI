
import { ImageKitProvider,IKContext,IKImage,IKUpload } from "@imagekit/react"
    const authenticator = async () => {

        const urlEndpoint=import.meta.env.IMAGE_KIT_ENDPOINT
        const publicKey=import.meta.env.IMAGE_KIT_PUBLIC_KEY

        try {
            // Perform the request to the upload authentication endpoint.
            const response = await fetch("http:localhost:3001/api/upload");
            if (!response.ok) {
                // If the server response is not successful, extract the error text for debugging.
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }

            // Parse and destructure the response JSON for upload credentials.
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            // Log the original error for debugging before rethrowing a new error.
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };

const Upload = () => {
  return (
<IKContext
    urlEndpoint={urlEndpoint}
    publicKey={publicKey}
    authenticator={authenticator}
>
  <IKUpload
        fileName="test-upload.jpg"
        onSuccess={onSuccess}
        onError={onSuccess}
      />
</IKContext>

  )
}

export default Upload
