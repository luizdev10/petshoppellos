
const siteConfig = {
  negocio: {
    nome: "PetShop Pellos",
    slogan: "O cuidado que seu pet merece, pertinho de você.",
    descricaoCurta: "Banho e tosa, produtos e rações e atendimento veterinário para quem você ama.",
  },

  contato: {
    // TODO: trocar telefone e endereço pelos dados reais do cliente depois da aprovação
    whatsapp: "5588988853140",
    whatsappExibicao: "(88) 9 8885-3140",
    prefixoMensagem: "[DEMO Pellos] ",
    email: "",
    endereco: {
      rua: "Rua Exemplo, 123",
      bairro: "Centro",
      cidade: "Juazeiro do Norte",
      uf: "CE",
      cep: "00000-000",
    },
    mapa: "",
    mensagens: {
      contato: "Olá! Gostaria de saber mais sobre os serviços.",
      rodape: "Olá! Tudo bem?",
      privacidade: "",
      banho: [
        "Olá, tudo bem? Gostaria de agendar um serviço.",
        "",
        "Serviço: {servico}",
        "Nome do tutor: {nomeTutor}",
        "Nome do pet: {nomePet}",
        "Telefone: {telefone}",
        "Porte: {porte}",
        "Raça: {raca}",
        "",
        "Quanto ficaria o serviço?",
      ].join("\n"),
      atendimento: [
        "Olá! Gostaria de agendar um atendimento veterinário.",
        "",
        "DADOS DO TUTOR",
        "Nome: {nomeTutor}",
        "Telefone: {telefone}",
        "",
        "DADOS DO PET",
        "Nome: {nomePet}",
        "Espécie: {especie}",
        "Raça: {raca}",
        "Idade: {idade}",
        "",
        "SOBRE O ATENDIMENTO",
        "Motivo: {motivo}",
        "Quando começou: {inicio}",
        "Informações adicionais: {observacoes}",
      ].join("\n"),
      /*
      produto: [
        "Olá! Tenho interesse no produto:",
        "",
        "{produto}",
        "Preço: {preco}",
        "",
        "Gostaria de saber mais informações.",
      ].join("\n"),
      */
    },
  },

  horario: {
    texto: "Segunda a sexta, 7h30 às 17h; sábado, 7h30 às 15h",
    periodos: [
      {
        dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        abre: "07:30",
        fecha: "17:00",
      },
      {
        dias: ["Saturday"],
        abre: "07:30",
        fecha: "15:00",
      },
    ],
  },

  redes: {
    instagram: "https://www.instagram.com/pellosoficial/",
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  servicos: {
    destaques: ["Banho", "Tosa", "Hidratação", "Produtos e rações", "Atendimento veterinário", "e muito mais!"],
    estetica: [
      {
        nome: "Banho",
        botao: "Agendar banho",
        descricao: "Banho completo com produtos de alta qualidade",
        preco: "R$ 50,00",
      },
      {
        nome: "Tosa",
        botao: "Agendar tosa",
        descricao: "Tosa completa com produtos de alta qualidade",
        preco: "R$ 50,00",
      },
      {
        nome: "Hidratação",
        botao: "Agendar hidratação",
        descricao: "Hidratação completa com produtos de alta qualidade",
        preco: "R$ 50,00",
      },
      {
        nome: "Banho e Tosa Completa",
        botao: "Agendar banho e tosa",
        descricao: "Banho e Tosa completa com produtos de alta qualidade",
        preco: "R$ 50,00",
      },
    ],
    /*
    produtos: [
      { nome: "Bola Colorida", preco: "R$ 19,90", imagem: "bola.jpg" },
      { nome: "Mordedor para Cães", preco: "R$ 29,90", imagem: "mordedor.jpg" },
      { nome: "Ratinho de Pelúcia", preco: "R$ 14,90", imagem: "ratinho.jpg" },
      { nome: "Arranhador para Gatos", preco: "R$ 89,90", imagem: "arranhador.jpg" },
      { nome: "Corda para Cachorro", preco: "R$ 24,90", imagem: "corda.jpg" },
      { nome: "Bolinha com Guizo", preco: "R$ 12,90", imagem: "bolinha-guizo.jpg" },
      { nome: "Osso de Borracha", preco: "R$ 34,90", imagem: "osso.jpg" },
      { nome: "Túnel para Gatos", preco: "R$ 69,90", imagem: "tunel.jpg" },
      { nome: "Frisbee para Cães", preco: "R$ 39,90", imagem: "frisbee.jpg" },
    ],
    */
  },

  imagens: {
    logo: {
      arquivo: "logo-pellos.png",
      alt: "Pellos Petshop",
    },
    inicio: {
      arquivo: "imginicio.webp",
      alt: "Pet recebendo carinho e cuidados",
      largura: 1100,
      altura: 825,
    },
    sobre: {
      arquivo: "fundomobile.webp",
      alt: "Pet recebendo boas-vindas no espaço",
      largura: 1100,
      altura: 1513,
    },
    estetica: {
      arquivo: "fundomobile.webp",
      alt: "Banho e Tosa",
      largura: 1100,
      altura: 1513,
    },
  },

  textos: {
    navbar: {
      links: [
        { nome: "INÍCIO", url: "#inicio" },
        { nome: "SOBRE", url: "#sobre" },
        { nome: "ESTÉTICA", url: "#banhoetosa" },
        { nome: "ATENDIMENTO VETERINÁRIO", url: "#atendimento" },
      ],
      botao: "Agendar",
      botaoUrl: "#servicos",
      abrirMenu: "Abrir menu",
      fecharMenu: "Fechar menu",
    },

    inicio: {
      pilares: ["Banho", "Tosa", "Hidratação"],
      subtitulo:
        "Banho e tosa, produtos e rações e atendimento veterinário, com carinho e atenção a cada detalhe para o seu pet.",
      botaoPrincipal: "Fale conosco",
      botaoSecundario: "Conheça nossos serviços",
      botaoSecundarioUrl: "#servicos",
      frase: "Atendimento atencioso para pets e tutores.",
    },

    sobre: {
      eyebrow: "Sobre nós",
      titulo: "Mais do que um pet shop: um lugar de carinho para o seu pet.",
      descricao:
        "Aqui, o banho e a tosa são feitos com calma, e você ainda encontra produtos e rações e atendimento veterinário, com uma equipe dedicada a deixar seu pet limpo, saudável e confortável em cada visita.",
      indicadores: [
        { valor: "5,0 ★", rotulo: "Avaliação" },
        { valor: "100+", rotulo: "Clientes atendidos" },
        { valor: "100%", rotulo: "Dedicação" },
      ],
      tituloDestaques: "Contamos com:",
      botao: "Saiba mais",
      botaoUrl: "#servicos",
    },

    estetica: {
      eyebrow: "BANHO E TOSA",
      titulo: "Cuidado, carinho e bem-estar para seu pet",
      descricao:
        "Oferecemos banho, tosa e hidratação pensados para manter seu pet limpo, saudável e confortável.",
      botaoAgendar: "Agendar banho",
      servicoPadrao: "Banho",
      botaoServicos: "Conhecer Serviços",
      botaoServicosUrl: "#servicos",
      diferenciais: ["Atendimento Personalizado", "Produtos de Qualidade", "Ambiente Seguro"],
      servicosEyebrow: "NOSSOS SERVIÇOS",
      servicosTitulo: "Tudo para manter seu pet bem cuidado.",
      servicosSubtitulo: "Escolha os serviços para as necessidades do seu pet.",
      avisoPreco: "Lembrando que os preços podem ser alterados conforme o tamanho do pet.",
      aPartirDe: "a partir de",
      modal: {
        eyebrow: "Agendamento",
        titulo: "Agendar serviço",
        intro: "Preencha seus dados e entraremos em contato para confirmar o atendimento.",
        servicoEscolhido: "Serviço escolhido:",
        fechar: "Fechar formulário",
        campos: {
          nomeTutor: { rotulo: "Seu nome", placeholder: "Digite seu nome" },
          nomePet: { rotulo: "Nome do pet", placeholder: "Digite o nome do pet" },
          telefone: { rotulo: "Telefone", placeholder: "(XX) XXXXX-XXXX" },
          porte: { rotulo: "Porte do pet", placeholder: "Selecione o porte" },
          raca: { rotulo: "Raça", placeholder: "Digite a raça do pet" },
        },
        portes: ["Pequeno", "Médio", "Grande"],
        avisoValores: "*Os valores podem sofrer alterações conforme o tamanho do pet*",
        cancelar: "Cancelar",
        enviar: "Agendar pelo WhatsApp",
      },
    },

    atendimento: {
      eyebrow: "Agendamento",
      titulo: "Informações para o atendimento veterinário",
      ajuda: "Os campos com * são necessários para enviar a solicitação.",
      grupoTutor: "Dados do tutor",
      grupoPet: "Dados do pet",
      grupoMotivo: "Motivo e preferência de horário",
      campos: {
        nomeTutor: { rotulo: "Seu nome *", placeholder: "Digite seu nome" },
        telefone: { rotulo: "Telefone/WhatsApp *", placeholder: "(XX) XXXXX-XXXX" },
        nomePet: { rotulo: "Nome do pet *", placeholder: "Digite o nome do pet" },
        especie: { rotulo: "Espécie *", placeholder: "Selecione" },
        especieOutra: { placeholder: "Qual espécie?" },
        raca: { rotulo: "Raça", placeholder: "Se não souber, pode deixar em branco" },
        idade: { rotulo: "Idade aproximada", placeholder: "Ex.: 3 anos" },
        motivo: { rotulo: "Motivo do atendimento *", placeholder: "Selecione uma opção" },
        motivoOutro: { rotulo: "Qual o motivo?", placeholder: "Digite o motivo" },
        inicio: {
          rotulo: "Se há algum sintoma, quando começou?",
          placeholder: "Ex.: ontem, há uma semana...",
        },
        observacoes: {
          rotulo: "Informações adicionais",
          placeholder: "Descreva brevemente algo que a equipe deva saber",
        },
      },
      especies: ["Cachorro", "Gato", "Outros"],
      motivos: ["Vacinação", "Retorno", "Atendimento geral", "Exames", "Emergência", "Outros"],
      opcaoOutros: "Outros",
      naoInformado: "Não informado",
      botao: "Continuar pelo WhatsApp",
    },

    avisoPrivacidade: {
      destaque: "Privacidade:",
      texto:
        "ao continuar, os dados informados serão incluídos no texto de uma mensagem de WhatsApp dirigida ao estabelecimento para responder ao seu pedido ou agendamento. O site não envia esses dados a um backend próprio. O WhatsApp abrirá a mensagem preenchida para você revisar e enviar; evite incluir informações sensíveis. Consulte a",
      link: "política de privacidade",
    },

    /*
    shop: {
      eyebrow: "Produtos para seu pet",
      titulo: "Brinquedos e acessórios",
      descricao: "Escolha seu produto favorito e fale conosco pelo WhatsApp.",
      botaoComprar: "Comprar pelo WhatsApp",
      anterior: "Anterior",
      proxima: "Próxima",
      produtosPorPagina: 4,
    },
    */

    rodape: {
      links: [
        { texto: "Início", destino: "#inicio" },
        { texto: "Sobre nós", destino: "#sobre" },
        { texto: "Estética", destino: "#banhoetosa" },
        { texto: "Atendimento veterinário", destino: "#atendimento" },
        { texto: "Privacidade", destino: "#privacidade" },
      ],
      tituloNavegacao: "Navegação",
      tituloContato: "Entre em contato",
      labelNavegacao: "Links do rodapé",
      textoWhatsapp: "Fale conosco pelo WhatsApp",
      copyright: "Demonstração de site para o PetShop Pellos",
    },

    privacidade: {
      responsavel:
        "PREENCHER PELO RESPONSÁVEL: nome empresarial ou identificação jurídica confirmada do estabelecimento e demais dados de identificação que devam ser publicados.",
      rotuloWhatsapp: "WhatsApp:",
    },
  },

  demonstracao: {
    ativo: true,
    texto: "Site de demonstração",
    avisoFormulario: "Esta é uma demonstração. A mensagem será enviada ao desenvolvedor do site.",
  },

  seo: {
    titulo: "PetShop Pellos - Demonstração",
    descricao:
      "Banho e tosa, produtos e rações e atendimento veterinário para o seu pet. Agende pelo WhatsApp.",
    ogTitulo: "PetShop Pellos - Demonstração",
    ogDescricao:
      "Banho e tosa, produtos e rações e atendimento veterinário para o seu pet.",
    url: "https://luizdev10.github.io/petshoppellos/",
    ogImagem: "og-pellos.jpg",
    ogImagemLargura: 1200,
    ogImagemAltura: 630,
    ogImagemAlt: "PetShop Pellos - banho e tosa",
    idioma: "pt-BR",
    tipoSchema: "PetStore",
    noindex: true,
  },
};

export default siteConfig;
