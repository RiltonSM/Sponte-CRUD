import {useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';

import { 
    DropzoneContainer, 
    GrayText, 
    BlueText 
} from './styles'

import { Props } from './interfaces';

const Dropzone = ( { onFileUploaded, type }: Props ) => {
    const [selectedFileUrl, setSelectedFileUrl ] = useState('');
    const [filePath, setFilePath] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        
        try{
            const fileUrl = URL.createObjectURL(file);
            setSelectedFileUrl(fileUrl);
            setFilePath(file.path);
            onFileUploaded(file);
        } catch(e){
            setFilePath(`Impossível carregar arquivo, tente carregar imagens ${type}`);
        }


    }, [onFileUploaded, type])

    const { fileRejections, getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: type
    })

    return (
        <DropzoneContainer {...getRootProps()} style={{marginBottom: '1rem'}}>
            <input {...getInputProps()}/>
            {
                selectedFileUrl || fileRejections.length > 0
                    ? type === "image/png" ? <img src={selectedFileUrl} style={{ width: 100, height: 70 }} alt="arquivo"/> : <span>{filePath}</span>
                    : (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>
                                <GrayText>Arraste para cá ou</GrayText>
                                <BlueText>Selecione a imagem</BlueText>
                            </div>
                        </div>
                    )
            }
            

        </DropzoneContainer>
    )
}

export default Dropzone;