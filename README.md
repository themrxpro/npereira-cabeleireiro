# Natália Pereira · Cabeleireiro & Estética

Site estático em português de Portugal para o salão de Leça da Palmeira. HTML, CSS e JavaScript sem dependências, sem instalação nem compilação.

## Publicar no GitHub Pages

1. Criar o repositório `npereira-cabeleireiro` na conta pretendida. No plano GitHub Free, usar um repositório público.
2. Colocar os ficheiros deste projeto na raiz do ramo `main`, incluindo `.nojekyll`.
3. Em **Settings → Pages → Build and deployment**, selecionar **Deploy from a branch**, ramo **main**, pasta **/(root)** e **Save**.
4. Aguardar o processo de publicação. O GitHub apresenta o endereço publicado nas definições de Pages.

Documentação: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Não é necessário GitHub Actions personalizado. Cada alteração no ramo publicado atualiza o site. Um domínio próprio pode ser configurado mais tarde, com acesso ao respetivo DNS; este projeto não altera o domínio existente do negócio.

## Conteúdo e manutenção

- Telefone: `+351 22 996 7643`, ligações `tel:+351229967643`.
- Morada: Rua General Humberto Delgado, 472, 4450-700 Leça da Palmeira.
- Terça a sexta: 09:30–19:30. Sábado: 09:00–19:00. Domingo e segunda: encerrado.
- Alterar os contactos e horários no HTML **e** nos dados estruturados JSON-LD. O estado do horário no JavaScript usa o fuso `Europe/Lisbon`; não prevê feriados ou encerramentos extraordinários.
- Serviços, preços, horários e condições devem ser confirmados pelo salão antes de divulgar amplamente o site. As fontes consultadas são listagens públicas; o domínio anteriormente associado ao negócio não pôde ser consultado.
- As marcações são feitas por telefone. Não existe agenda online nem envio de formulários.
- A imagem principal é editorial e criada com IA, identificada como ilustrativa. Não é uma fotografia do salão nem um portefólio de trabalhos. Substituir por fotografias reais autorizadas quando disponíveis.
- O site usa fontes do sistema e não inclui análise de tráfego, cookies de publicidade, mapas embebidos nem pedidos de fontes externas. O mapa abre apenas quando o visitante o escolhe.

## Consultar localmente

Abrir `index.html` num navegador, ou executar na pasta:

```sh
python3 -m http.server 8000
```

## Fontes de pesquisa

Consultadas em 19 de outubro de 2026:

- Waze, morada, telefone e horário: https://www.waze.com/live-map/directions/pt/porto/leca-da-palmeira/natalia-pereira-cabeleireiros?to=place.ChIJTQSxCdRoJA0Rk-fwoGak94M
- Casamentos.pt, serviços de cabeleireiro, maquilhagem, massagem, manicure, pedicure e noivas: https://www.casamentos.pt/beleza-noivas/natalia-pereira-cabeleireiro--e128359
- Estética Perto, confirmação de morada, telefone, horário e encerramento ao domingo e segunda: https://esteticaperto.com/cabeleireiros/leca-da-palmeira/natalia-pereira-cabeleireiros/

Não foram transcritas avaliações, classificações ou testemunhos. Não foram publicados preços porque não foram confirmados diretamente.
