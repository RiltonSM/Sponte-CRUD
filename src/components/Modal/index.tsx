import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiXCircle } from "react-icons/fi";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import moment from 'moment';

//Components
import Dropzone from '../Dropzone';
import Input from '../Input';
import SingleDatePicker from '../DateSinglePicker';
import Button from '../Button';

//Styles
import {
    Overlay,
    Container,
    CloseContainer,
    Close,
    Content,
    ViewContainer,
    ImageContainer,
    Image,
    TextContainer,
    TextTitle,
    Text,
    Row,
    CategotyTextContainer,
    CategotyText,
    AddAndEditContainer,
    FormContainer,
    Column,
    ButtonContainer,
    Legend,
    CategoryColumn,
    CategoriesContainer,
    CheckboxContainer,
    TextArea,
    InputLegend,
    ErrorMessage
} from './styles';

//Actions Functions
import { addProduct, editProduct } from '../../redux/actions/products'

//Assets
import colors from '../../assets/css/colors';

//Interface
import { ModalProps, DataInterface } from './interfaces';

const Modal = ({ setModalVisibility, type }: ModalProps) => {
    const [productImg, setProductImg] = useState<File>();
    const [date, setDate] = useState<null | moment.Moment>(null);
    const [isErrorMessageShowed, setIsErrorMessageShowed] = useState(false);

    const selectedProduct = useSelector((state: {products: {selected: DataInterface}}) => state.products.selected);
    const dispatch = useDispatch();


    useEffect(() => {
        if(type === 3){
            setDate(moment(selectedProduct.acquisitionDate))
        }
    }, [type]);
    
    const closeModal = () => {
        setModalVisibility(false);
    }

    const generateCategoriesText = () => {
        return selectedProduct.category.map((category, index) => (
            <CategotyText key={index}>{ category }</CategotyText>
        ))
    }

    const convertCategoryArrayToObject = () => {
        const categories = {
            games: false,
            console: false,
            accessory: false,
            services: false,
            hardware: false,
            smartPhone: false,
            tv: false,
            householdAppliance: false
        }
        
        selectedProduct.category.map(category => {
            switch(category){
                case "Acessório":
                    categories.accessory = true;
                    break;
                case "Console":
                    categories.console = true;
                    break;
                case "Games":
                    categories.games = true;
                    break;
                case "Hardware":
                    categories.hardware = true;
                    break;
                case "Eletrodoméstico":
                    categories.householdAppliance = true;
                    break;
                case "Serviço":
                    categories.services = true;
                    break;
                case "Celulares e Smartphones":
                    categories.smartPhone = true;
                    break;
                case "TVs":
                    categories.tv = true;
                    break;
            }
        })

        return categories;
    }

    const formValidationWithYup = Yup.object().shape({
        name: Yup.string().max(100).required(),
        description: Yup.string().required(),
        quantity: Yup.string().required(),
        height: Yup.string().required(),
        width: Yup.string().required(),
        length: Yup.string().required(),
        amount: Yup.string().required(),
        acquisitionDate: Yup.string().required(),
        categories: Yup.object().shape({
            games: Yup.boolean().required(),
            console: Yup.boolean().required(),
            accessory: Yup.boolean().required(),
            services: Yup.boolean().required(),
            hardware: Yup.boolean().required(),
            smartPhone: Yup.boolean().required(),
            tv: Yup.boolean().required(),
            householdAppliance: Yup.boolean().required()
        })
    });

    const generateCategoryArray = (valuesCategories: any) => {
        const categories: Array<string> = [];

        const keys = Object.keys(valuesCategories);

        keys.map((key: string) => {
            if(valuesCategories[key]){
                switch(key){
                    case 'accessory':
                        categories.push('Acessório');
                        break;
                    case 'console':
                        categories.push('Console');
                        break;
                    case 'games':
                        categories.push('Games');
                        break;
                    case 'hardware':
                        categories.push('Hardware');
                        break;
                    case 'householdAppliance':
                        categories.push('Eletrodoméstico');
                        break;
                    case 'services':
                        categories.push('Serviços');
                        break;
                    case 'smartPhone':
                        categories.push('Celulares e Smartphones');
                        break;
                    case 'tv':
                        categories.push('TVs');
                        break;
                }
            }
        });

        return categories;
    }

    const generateContentAccordingType = () => {
        switch(type){
            case 1: //visualizar detalhes do produto
                return(
                    <ViewContainer>
                        <ImageContainer>
                            <Image src={selectedProduct.image} alt={selectedProduct.name}/>
                        </ImageContainer>

                        <TextContainer>
                            <TextTitle>Nome</TextTitle>
                            <Text>{selectedProduct.name}</Text>

                            <TextTitle>Descrição</TextTitle>
                            <Text>{selectedProduct.description}</Text>

                            <TextTitle>Categoria</TextTitle>
                            <CategotyTextContainer>
                                { generateCategoriesText() }
                            </CategotyTextContainer>

                            <TextTitle>Quantidade</TextTitle>
                            <Text>{selectedProduct.quantity}</Text>

                            <TextTitle>Valor</TextTitle>
                            <Text>R$ {selectedProduct.amount.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>

                            <TextTitle>Data de aquisição</TextTitle>
                            <Text>{moment(selectedProduct.acquisitionDate).format("DD/MM/YYYY")}</Text>

                            <TextTitle>Código de barras</TextTitle>
                            <Text>{selectedProduct.code}</Text>

                            <Row>
                                <div>
                                    <TextTitle>Altura</TextTitle>
                                    <Text>{selectedProduct.height}</Text>
                                </div>

                                <div>
                                    <TextTitle>Comprimento</TextTitle>
                                    <Text>{selectedProduct.length}</Text>
                                </div>

                                <div>
                                    <TextTitle>Largura</TextTitle>
                                    <Text>{selectedProduct.width}</Text>
                                </div>
                            </Row>
                        </TextContainer>
                    </ViewContainer>
                )
            case 2: 
                return(
                    <AddAndEditContainer>
                        <Formik
                            initialValues={{
                                name: "",
                                description: "",
                                quantity: "",
                                height: "",
                                width: "",
                                length: "",
                                amount: "",
                                acquisitionDate: "",
                                categories: {
                                    games: false,
                                    console: false,
                                    accessory: false,
                                    services: false,
                                    hardware: false,
                                    smartPhone: false,
                                    tv: false,
                                    householdAppliance: false
                                }
                            }}
                            validationSchema={formValidationWithYup}
                            onSubmit={async (values) => {
                                let categories: Array<string> = [];

                                categories = generateCategoryArray(values.categories);

                                console.log(categories)

                                const toBase64= (file: File) => new Promise((resolve, reject): string => {
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = () => resolve(reader.result);
                                    reader.onerror = error => reject(error);
                                    
                                    return `${reader.result}`;
                                });

                                let base64Img: string | unknown = "";
                                if(productImg !== undefined){
                                    base64Img = await toBase64(productImg);
                                }

                                const product = {
                                    name: values.name,
                                    description: values.description,
                                    quantity: parseInt(values.quantity),
                                    height: parseInt(values.height),
                                    width: parseInt(values.width),
                                    length: parseInt(values.length),
                                    code: Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000,
                                    category: categories,
                                    amount: parseFloat(values.amount),
                                    acquisitionDate: values.acquisitionDate,
                                    image: productImg !== undefined ? `${base64Img}` : "",
                                };

                                dispatch(addProduct(product));
                                closeModal();
                            }}
                        >
                            {({values, errors}) => {
                                const changeValueAcquisitionDate = (date: string) => {
                                    values.acquisitionDate = moment(date).format("YYYY-MM-DD");
                                }

                                // console.log(values)
                                return (
                                    <Form style={{width: '100%'}}>
                                        <FormContainer>
                                            <Column>
                                                <Dropzone onFileUploaded={setProductImg} type="image/png"/>
                                                <Field id="name" name="name" style={{marginBottom: 0}} placeholder="Nome do produto" as={Input}/>
                                                <InputLegend>Máximo de Caracteres: 100</InputLegend>

                                                <Field id="description" name="description" placeholder="Descrição do produto" as={TextArea}/>
                                            </Column>
                                            <Column>
                                                <Field id="amount" name="amount" placeholder="Valor" type="number" min={0} step=".01" as={Input}/>
                                                <Field id="quantity" name="quantity" placeholder="Quantidade" type="number" min={0} as={Input}/>
                                                <Field 
                                                    name="acquisitionDate" 
                                                    placeholder="Data da aquisição" 
                                                >
                                                    {() => (
                                                        <SingleDatePicker id="acquisitionDate" date={date} onChange={changeValueAcquisitionDate} setDate={setDate}/>
                                                    )}
                                                </Field>
                                                <Field id="height" name="height" type="number" placeholder="Altura (cm)" min={0} as={Input}/>
                                                <Field id="width" name="width" type="number" placeholder="Largura (cm)" min={0} as={Input}/>
                                                <Field id="length" name="length" type="number" placeholder="Comprimento (cm)" as={Input}/>
                                            </Column>
                                        </FormContainer>

                                        <Legend>Selecione as Categorias</Legend>
                                        <CategoriesContainer>
                                            <CategoryColumn>
                                                <CheckboxContainer>
                                                    <Field id="categories.games" name="categories.games" type="checkbox"/>
                                                    <label htmlFor="categories.games">Games</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.console" name="categories.console" type="checkbox"/>
                                                    <label htmlFor="categories.console">Consoles</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.accessory" name="categories.accessory" type="checkbox"/>
                                                    <label htmlFor="categories.accessory">Acessórios</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.services" name="categories.services" type="checkbox"/>
                                                    <label htmlFor="categories.services">Serviços</label>
                                                </CheckboxContainer>
                                            </CategoryColumn>

                                            <CategoryColumn>
                                                <CheckboxContainer>
                                                    <Field id="categories.smartPhone" name="categories.smartPhone" type="checkbox"/>
                                                    <label htmlFor="categories.smartPhone">Celulares e Smartphone</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.hardware" name="categories.hardware" type="checkbox"/>
                                                    <label htmlFor="categories.hardware">Hardwares</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.tv" name="categories.tv" type="checkbox"/>
                                                    <label htmlFor="categories.tv">TVs</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.householdAppliance" name="categories.householdAppliance" type="checkbox"/>
                                                    <label htmlFor="categories.householdAppliance">Eletrodoméstico</label>
                                                </CheckboxContainer>
                                            </CategoryColumn>
                                        </CategoriesContainer>


                                        <ButtonContainer>
                                            <Button
                                                id="add_button_submit"
                                                color={colors.primary} 
                                                hoverColor={colors.tertiary} 
                                                type="submit"
                                                onClick={() => {
                                                    if(errors !== {}){
                                                        setIsErrorMessageShowed(true);
                                                    }
                                                }}
                                            >
                                                Adicionar
                                            </Button>
                                        </ButtonContainer>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </AddAndEditContainer>    
                )
            case 3:
                return(
                    <AddAndEditContainer>
                        <Formik
                            initialValues={{
                                name: selectedProduct.name,
                                description: selectedProduct.description,
                                quantity: selectedProduct.quantity,
                                height: selectedProduct.height,
                                width: selectedProduct.width,
                                length: selectedProduct.length,
                                amount: selectedProduct.amount,
                                acquisitionDate: selectedProduct.acquisitionDate,
                                categories: convertCategoryArrayToObject()
                            }}
                            validationSchema={formValidationWithYup}
                            onSubmit={async (values) => {
                                let categories: Array<string> = [];

                                categories = generateCategoryArray(values.categories);

                                const toBase64= (file: File) => new Promise((resolve, reject): string => {
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = () => resolve(reader.result);
                                    reader.onerror = error => reject(error);
                                    
                                    return `${reader.result}`;
                                });

                                let base64Img: string | unknown = "";
                                if(productImg !== undefined){
                                    base64Img = await toBase64(productImg);
                                }

                                const product = {
                                    id: selectedProduct.id,
                                    name: values.name,
                                    description: values.description,
                                    quantity: values.quantity,
                                    height: values.height,
                                    width: values.width,
                                    length: values.length,
                                    code: selectedProduct.code,
                                    category: categories,
                                    amount: values.amount,
                                    acquisitionDate: values.acquisitionDate,
                                    image: productImg !== undefined ? `${base64Img}` : selectedProduct.image,
                                };

                                dispatch(editProduct(product));
                                closeModal();
                            }}
                        >
                            {({values, errors}) => {
                                const changeValueAcquisitionDate = (date: string) => {
                                    values.acquisitionDate = moment(date).format("YYYY-MM-DD");
                                }

                                return (
                                    <Form style={{width: '100%'}}>
                                        <FormContainer>
                                            <Column>
                                                <Dropzone onFileUploaded={setProductImg} type="image/png"/>
                                                <Field id="name" name="name" style={{marginBottom: 0}} placeholder="Nome do produto" as={Input}/>
                                                <InputLegend>Máximo de Caracteres: 100</InputLegend>

                                                <Field id="description" name="description" placeholder="Descrição do produto" as={TextArea}/>
                                            </Column>
                                            <Column>
                                                <Field id="amount" name="amount" placeholder="Valor" type="number" min={0} step=".01" as={Input}/>
                                                <Field id="quantity" name="quantity" placeholder="Quantidade" type="number" min={0} as={Input}/>
                                                <Field 
                                                    name="acquisitionDate" 
                                                    placeholder="Data da aquisição" 
                                                    onChange={(e: any) => {
                                                        
                                                    }}
                                                >
                                                    {() => (
                                                        <SingleDatePicker id="acquisitionDate" date={date} onChange={changeValueAcquisitionDate} setDate={setDate}/>
                                                    )}
                                                </Field>
                                                <Field id="height" name="height" type="number" placeholder="Altura (cm)" min={0} as={Input}/>
                                                <Field id="width" name="width" type="number" placeholder="Largura (cm)" min={0} as={Input}/>
                                                <Field id="length" name="length" type="number" placeholder="Comprimento (cm)" as={Input}/>
                                            </Column>
                                        </FormContainer>

                                        <Legend>Selecione as Categorias</Legend>
                                        <CategoriesContainer>
                                            <CategoryColumn>
                                                <CheckboxContainer>
                                                    <Field id="categories.games" name="categories.games" type="checkbox"/>
                                                    <label htmlFor="categories.games">Games</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.console" name="categories.console" type="checkbox"/>
                                                    <label htmlFor="categories.console">Consoles</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.accessory" name="categories.accessory" type="checkbox"/>
                                                    <label htmlFor="categories.accessory">Acessórios</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.services" name="categories.services" type="checkbox"/>
                                                    <label htmlFor="categories.services">Serviços</label>
                                                </CheckboxContainer>
                                            </CategoryColumn>

                                            <CategoryColumn>
                                                <CheckboxContainer>
                                                    <Field id="categories.smartPhone" name="categories.smartPhone" type="checkbox"/>
                                                    <label htmlFor="categories.smartPhone">Celulares e Smartphone</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.hardware" name="categories.hardware" type="checkbox"/>
                                                    <label htmlFor="categories.hardware">Hardwares</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.tv" name="categories.tv" type="checkbox"/>
                                                    <label htmlFor="categories.tv">TVs</label>
                                                </CheckboxContainer>
                                                <CheckboxContainer>
                                                    <Field id="categories.householdAppliance" name="categories.householdAppliance" type="checkbox"/>
                                                    <label htmlFor="categories.householdAppliance">Eletrodoméstico</label>
                                                </CheckboxContainer>
                                            </CategoryColumn>
                                        </CategoriesContainer>

                                        {
                                            isErrorMessageShowed && <ErrorMessage>Um ou mais campos não foram preenchidos</ErrorMessage>
                                        }
                                                    

                                        <ButtonContainer>
                                            <Button
                                                id="edit_button_submit"
                                                color={colors.primary} 
                                                hoverColor={colors.tertiary} 
                                                type="submit"
                                                onClick={() => {
                                                    if(errors !== {}){
                                                        setIsErrorMessageShowed(true);
                                                    }
                                                }}
                                            >
                                                Editar
                                            </Button>
                                        </ButtonContainer>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </AddAndEditContainer>    
                )
        }
    }

    return(
        <Overlay onClick={closeModal}>
            <Container
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <CloseContainer>
                    <Close id="close_modal" onClick={closeModal}>
                        <FiXCircle size={32} color={colors.secondary}/>
                    </Close>
                </CloseContainer>
                <Content>
                    { generateContentAccordingType() }
                </Content>
            </Container>
        </Overlay>
    )
}

export default Modal;