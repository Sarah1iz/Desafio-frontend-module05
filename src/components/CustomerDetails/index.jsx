import './styles.css'
import { useContext, useEffect, useState } from 'react';
import {
    Avatar,
    Grid,
    Stack,
    Box,
    TextField,
    IconButton,
    Button,
} from "@mui/material";
import NavMenu from "../NavMenu/index";
import colors from "../../style/colors";
import clients from "../../assets/clients.svg";
import editIcon from "../../assets/editicon.svg";
import editIcon2 from "../../assets/editicon2.svg";
import deleteIcon from "../../assets/deleteicon.svg";
import sortIconHeaders from "../../assets/sortIconHeaders.svg";
import axios from "axios";
import { Await } from 'react-router-dom';
import { AuthContext } from "../../context/myContext";
import { format } from '../../../node_modules/date-fns';
import ptBr from 'date-fns/locale/pt-BR';


export default function CustomerDetails({ data }) {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    const nameUser = userStorage.name;
    const words = nameUser.split(' ');
    const firstLetters = [];

    const { customerData, setCustomerData } = useContext(AuthContext);

    for (let i = 0; i < 2; i++) {
        if (words[i] && words[i].length > 0) {
            const first = words[i][0];
            firstLetters.push(first);
        }
    }

    return (
        <>
            <Grid item xs={10} >

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        padding: "5.4rem 5.4rem 2.4rem",
                        borderBottom: "1px solid" + colors.Green.light,

                    }}
                    justifyContent="space-between"
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{

                            gap: '1rem'
                        }}
                        justifyContent="space-between"
                    >
                        <h1
                            style={{
                                fontSize: "1.6rem",
                                color: "#0E8750",
                                alignSelf: "flex-end",
                                marginBottom: "-2rem",
                            }}
                        >
                            Clientes
                        </h1>
                        <h1
                            style={{
                                fontSize: "1.6rem",
                                color: "#0E8750",
                                alignSelf: "flex-end",
                                marginBottom: "-2rem",
                            }}
                        >
    >
                        </h1>
                        <h1
                            style={{
                                fontSize: "1.6rem",
                                color: "#747488",
                                alignSelf: "flex-end",
                                marginBottom: "-2rem",
                            }}
                        >
                            Detalhes do cliente
                        </h1>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{
                                bgcolor: colors.Grey.f,
                                color: colors.Green.normal,
                                fontSize: "2rem",
                                fontFamily: "Nunito",
                            }}
                        >
                            {firstLetters}
                        </Avatar>
                        <NavMenu />
                    </Stack>
                </Stack>

            </Grid>


            <Grid item xs={10} sx={{
                marginLeft: "11.8rem"
            }}>
                <Stack direction="row"
                    spacing={2}
                    sx={{
                        padding: "3rem 3rem 1rem",
                        justifyContent: "left",
                        marginLeft: "2.5rem"
                    }}
                >

                    <img src={clients} alt="" />
                    <h1>{customerData.name_client}</h1>

                </Stack>
            </Grid>


            <Stack direction="row"
                sx={{
                    padding: "3rem 3rem 1rem",
                    marginLeft: "15.3rem"
                }}
                justifyContent="space-between"
            >
                <h3>Dados do cliente </h3>
                <Button
                    sx={{
                        width: "20rem",
                        height: "3.5rem",
                        borderRadius: "1rem",
                        backgroundColor: "#F8F8F9",
                        color: "#0E8750",
                        marginLeft: "70.3rem",
                        "&:hover": {
                            backgroundColor: "#0E8000",
                            color: "#F8F8F9"
                        },
                        fontSize: "1.4rem",
                    }}
                    variant="contained"
                    type="button"
                >
                    <img src={editIcon2} alt="" /> Editar Cliente
                </Button>
            </Stack>
            <Stack direction={'column'}
                sx={{
                    paddingTop: "2rem",
                    gap: "1rem",
                    marginLeft: '18.3rem'
                }}>
                <div className='first-client-data-row'>
                    <div className='data-client-space'>
                        <h5>E-Mail</h5>
                        <p>{customerData.email_client}</p>
                    </div >
                    <div className='data-client-space'>
                        <h5>Telefone</h5>
                        <p>{customerData.phone_client}</p>
                    </div>
                    <div className='data-client-space'>
                        <h5>CPF</h5>
                        <p>{customerData.cpf_client}</p>
                    </div>
                </div>

                <div className='second-client-data-row'>
                    <div className='data-client-space'>
                        <h5>Endereço</h5>
                        <p>{customerData.address_complete.address}</p>
                    </div>
                    <div className='data-client-space'>
                        <h5>Bairro</h5>
                        <p>{customerData.address_complete.neighborhood}</p>
                    </div>
                    <div className='data-client-space'>
                        <h5>Complemento</h5>
                        <p>{customerData.address_complete.complement}</p>
                    </div>
                    <div className='data-client-space'>
                        <h5>CEP</h5>
                        <p>{customerData.address_complete.zip_code}</p>
                    </div>
                    <div className='data-client-space'>
                        <h5>Cidade</h5>
                        <p>{customerData.address_complete.city}</p>
                    </div>
                    <div className='data-client-space'>
                        <h5>UF</h5>
                        <p>{customerData.address_complete.state}</p>
                    </div>
                </div>
            </Stack>

            <Grid item xs={11}
                sx={{ marginLeft: '10rem' }}>



                <div className="container-billingMain">
                    <div className="billing-box-header">
                        <div className="title-billing">
                            <h1>Cobrança</h1>
                        </div>
                        <div className="search-box-users charges">
                        </div>
                    </div>
                    <div className="box-table-billings ">
                        <div className="table-header-customer charges-table">
                            <ul>
                                <li>
                                    <img src={sortIconHeaders} alt="Sort Icon" />
                                    Cliente
                                </li>
                                <li>
                                    <img src={sortIconHeaders} alt="Sort Icon" />
                                    ID Cob.
                                </li>
                                <li>Valor</li>
                                <li>Data de Venc.</li>
                                <li>Status</li>
                                <li>Descrição</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="body-table-customer charges-table">

                            {customerData.charges.map((charges) => {
                                const day = format(new Date(charges.due_date), 'dd/MM/yyy', { locale: ptBr })
                                const dueDate = new Date(charges.due_date);
                                const isExpired = charges.status_charge && dueDate > new Date();
                                return (
                                    <ul key={charges.id_charges}>
                                        <li>{customerData.name_client}</li>
                                        <li>{charges.id_charges}</li>
                                        <li>{`R$: ${(charges.amount / 100).toFixed(2).replace('.', ',')}`}</li>
                                        <li>{String(Number(day.slice(0, 2)) + 1) + '/' + day.slice(3, 5) + '/' + day.slice(6)}</li>
                                        <li className={charges.status_charge ? (isExpired ? "expired-client" : "pending-client") : "paid-client"}>
                                            {charges.status_charge ? (isExpired ? "Vencido" : "Pendente") : "Pago"}
                                        </li>

                                        <li>{charges.description}</li>
                                        <li></li>
                                        <li className="edit-delete">
                                            <div onClick={() => { setOpenModalEditCharges(true); setIdEdit(charges.id) }}>
                                                <img src={editIcon} alt="Edit Icon" />
                                                <span>Editar</span>
                                            </div>
                                            <div onClick={() => { setOpenModalDeleteCharges(true); setIdDelete(charges.id) }}>
                                                <img src={deleteIcon} alt="Delete Icon" />
                                                <span>Deletar</span>
                                            </div>
                                        </li>
                                    </ul>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Grid >


        </>



    );
}