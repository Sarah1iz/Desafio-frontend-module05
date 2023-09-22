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
import { Await, useParams } from 'react-router-dom';
import { AuthContext } from "../../context/myContext";


export default function CustomerDetails({ data }) {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    const nameUser = userStorage.name;
    const words = nameUser.split(' ');
    const firstLetters = [];

    const { customerDetailsActive, setCustomerDetailsActive } = useContext(AuthContext);

    const { id } = useParams();
    const customerData = data[id - 1];

    for (let i = 0; i < 2; i++) {
        if (words[i] && words[i].length > 0) {
            const first = words[i][0];
            firstLetters.push(first);
        }
    }





    return (
        <>
            <Grid item xs={10} sx={{ border: '1px solid red' }}>

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
                border: '1px solid red',
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

            <Stack direction="row"
                sx={{
                    padding: "3rem 3rem 1rem",
                    marginLeft: "15.3rem",
                    marginTop: "3rem"
                }}
                justifyContent="space-between"
            >
                <h3>Cobranças do Cliente </h3>
                <Button
                    sx={{
                        marginLeft: "66.3rem",
                        width: "20rem",
                        height: "3.5rem",
                        borderRadius: "1rem",
                        backgroundColor: "#DA0175",
                        "&:hover": {
                            backgroundColor: "#790342",
                        },
                        fontSize: "1.4rem",
                    }}
                    variant="contained"
                    type="button"
                >
                    + Nova cobrança
                </Button>
            </Stack>

            <div className="box-table-billings-details">
                <div className="table-header-customerData-details">
                    <ul>
                        <li>
                            <img src={sortIconHeaders} alt="Sort Icon" />
                            Id.Cob
                        </li>
                        <li>
                            <img src={sortIconHeaders} alt="Sort Icon" />Data de venc.</li>
                        <li>Valor</li>
                        <li>Status</li>
                        <li>Descrição</li>
                    </ul>
                </div>
                {customerData.charges.map(charges => (
                    <div className="body-table-customerData" key={charges.id}>
                        <ul>
                            <li>{charges.id_charges}</li>
                            <li>{charges.due_date}</li>
                            <li>R$ {(charges.amount / 100).toFixed(2)}</li>
                            <li>{charges.status ? "Vencida" : "Em dia"}</li>
                            <li>{charges['description ']}</li>
                            <li>
                                <img src={editIcon} alt="Edit Billing Icon" />

                            </li>
                            <li>
                                <img src={deleteIcon} alt="Delete Billing Icon" />

                            </li>
                        </ul>
                    </div>
                ))}
            </div>

        </>



    );
}