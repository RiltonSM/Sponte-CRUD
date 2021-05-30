import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
import Tour from 'reactour';

//Components
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import PageSelector from '../../components/PageSelector';

//Styles
import {
    Container,
    Header,
    Title,
    SearchInputContainer,
    Content,
    TableContainer,
    Table,
    Tr,
    Td,
    TitleTour,
    ContentText
} from './styles';

//Actions Functions
import { selectedProduct, removeProduct } from '../../redux/actions/products';

//Assets
import colors from '../../assets/css/colors';

//Interfaces
import { DataInterface } from '../../components/Modal/interfaces'

const Home = () => {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [isModalShowed, setIsModalShowed] = useState(false);
    const [modalType, setModalType] = useState(0);
    const [productsList, setProductsList] = useState<Array<DataInterface>>([]);
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);

    const [searchText, setSearchText] = useState("");

    const productsListRedux = useSelector((state: {products: {list: Array<DataInterface>}}) => state.products.list);
    const dispatch = useDispatch();

    useEffect(() => {
        const tutorialMustBeOpen = () => {
            const tutorial = localStorage.getItem("tutorial");

            if(tutorial === null){
                setIsTutorialOpen(true);
                localStorage.setItem("tutorial", JSON.parse('true'));
            } else {
                setIsTutorialOpen(false);
            }
        }

        tutorialMustBeOpen();
    }, []);

    useEffect(() => {
        setProductsList(productsListRedux);
    }, [productsListRedux]);

    useEffect(() => {
        const calcMaxPage = () => {
            const listLenght = productsListRedux.length;

            const minPage = Math.floor(listLenght / 10);
            const leftProducts = listLenght % 10;

            const numberOfPages = minPage + (leftProducts > 0 ? 1 : 0);

            setMaxPage(numberOfPages);
        }

        

        calcMaxPage();
    }, [productsList]);

    useEffect(() => {
        if( searchText === ""){
            if(productsList !== productsListRedux){
                setProductsList(productsListRedux);
            }
        } else {
            const newProductsList = productsListRedux.filter(product => {
                if(product.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1){
                    return product;
                }
                return;
            });
    
            setProductsList([...newProductsList])
        }
    }, [searchText]);

    const openModalDetails = (data: DataInterface) => {
        dispatch(selectedProduct(data));
        setModalType(1);
        setIsModalShowed(true);
    }

    const openModalAdd = () => {
        setModalType(2);
        setIsModalShowed(true)
    }

    const openModalEdit = () => {
        setModalType(3);
        setIsModalShowed(true);
    }

    const generateProducts = () => {
        return productsList.map((product, index) => {
            if(index >= ((page * 10) - 10) && index <= ((page*10) - 1)){
                return (
                    <Tr id={`tr_${product.id}`} onClick={() => openModalDetails(product)} key={product.code}>
                        <Td>{product.id}</Td>
                        <Td>{product.name}</Td>
                        <Td>{product.quantity}</Td>
                        <Td>R$ {product.amount.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Td>
                        <Td 
                            id={`edit_${product.id}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(selectedProduct(product));
                                openModalEdit();
                            }}
                        ><FiEdit color={colors.primary}/></Td>
                        <Td 
                            id={`remove_${product.id}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(removeProduct(product));
                            }}
                        ><FiTrash2 color={colors.secondary}/></Td>
                    </Tr>
                )
            }
            return;
        })
    }

    const steps = [
        {
            selector: '#table',
            content: () => (
              <div>
                <TitleTour>Produtos</TitleTour>
                <ContentText>A tabela apresentará os produtos cadastrados, cada página contém, no máximo, 10 produtos</ContentText>
              </div>
            ),
        },
        {
            selector: '#tr_0',
            content: () => (
                <div>
                    <TitleTour>Detalhes do produto</TitleTour>
                    <ContentText>Ao clicar sobre um produto, uma modal será aberta exibindo os detalhes do produto selecionado</ContentText>
                </div>
            ),
        },
        {
            selector: '#edit_0',
            content: () => (
                <div>
                    <TitleTour>Editar produto</TitleTour>
                    <ContentText>Ao clicar no botão de edição, será exibido uma modal com as informações já cadastradas do produto, podendo serem editadas (apenas a imagem é de preenchimento opcional).</ContentText>
                </div>
            ),
        }, 
        {
            selector: '#remove_0',
            content: () => (
                <div>
                    <TitleTour>Remover produto</TitleTour>
                    <ContentText>Ao clicar no botão de remoção, o produto será excluído da lista.</ContentText>
                </div>
            ),
        },
        {
            selector: '#list_filter',
            content: () => (
                <div>
                    <TitleTour>Filtrando a lista</TitleTour>
                    <ContentText>Você pode filtrar a listagem por digitar o nome do produto desejado aqui.</ContentText>
                </div>
            ),
        },
        {
            selector: '#add_button',
            content: () => (
                <div>
                    <TitleTour>Adicionar produto</TitleTour>
                    <ContentText>Ao clicar no botão de adição, uma modal será exibida e você poderá adicionar o produto (somente a imagem é opcional).</ContentText>
                </div>
            ),
        },
        {
            selector: '',
            content: () => (
                <div>
                    <TitleTour>Obrigado</TitleTour>
                    <ContentText>Para rever o tutorial, remova o campo "tutorial" do localStorage</ContentText>
                </div>
            ),
        },
    ]
    return(
        <Container>
            { isModalShowed && <Modal setModalVisibility={setIsModalShowed} type={modalType}/> }

            <Tour
                steps={steps}
                isOpen={isTutorialOpen}
                onRequestClose={() => setIsTutorialOpen(false)} 
                accentColor={colors.primary}
                showNumber={false}
                showNavigation
                showNavigationNumber={false}
                showButtons
            />

            <Card>
                <Header>
                    <Title>Sponte</Title>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <SearchInputContainer id="list_filter" className="inputWithIcon">
                            <FiSearch color={colors.white}/>
                            <SearchInput id="list_filter_input" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Pesquisar"/>
                        </SearchInputContainer>

                        <div style={{marginLeft: 30}}>
                            <Button id="add_button" color={colors.secondary} hoverColor={colors.quaternary} onClick={() => openModalAdd()}>
                                <FiPlus color={colors.white}/>
                            </Button>
                        </div>
                    </div>
                </Header>

                <Content>
                    <TableContainer>
                        <Table id="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitário</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                { generateProducts() }
                            </tbody>
                        </Table>
                    </TableContainer>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <PageSelector page={page} setPage={setPage} maxPage={maxPage}/>
                    </div>
                </Content>
            </Card>
        </Container>
    )
}

export default Home;