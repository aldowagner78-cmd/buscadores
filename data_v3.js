// Data V3 (Digital Extraction + Clean Norms)
const medicasDataV3 = [
  {
    "code": "07.90.03",
    "description": "EMBOLIZACI\u00d3N SELECTIVA ARTERIAL PERIFERICA (EXCLUYE CEREBRAL)",
    "price_hidden": "$452,879",
    "coseguro": "$457,276",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "EMBOLIZACI\u00d3N SELECTIVA ARTERIAL PERIFERICA (EXCLUYE CEREBRAL) $452,879 $457,276 $461,673"
  },
  {
    "code": "07.90.04",
    "description": "",
    "price_hidden": "$2,441,304",
    "coseguro": "$2,465,006",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "VALVULOPLASTIA A\u00d3RTICA CON BAL\u00d3N O PROTESIS (IMPLANTE VALVULAR A\u00d3RTICO TRANSCATETER - TAVI) $2,441,304 $2,465,006 $2,488,708"
  },
  {
    "code": "07.90.43",
    "description": "",
    "price_hidden": "$1,878,303",
    "coseguro": "$1,896,539",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "CIERRE PERCUTANEO DE MALFORMACIONES CARDIACAS CONGENITAS (CIERRE DE DUCTUS, CIA, CIV) $1,878,303 $1,896,539 $1,914,775"
  },
  {
    "code": "07.90.44",
    "description": "CIERRE PERCUTANEO DE OREJUELA IZQUIERDA",
    "price_hidden": "$1,878,303",
    "coseguro": "$1,896,539",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "CIERRE PERCUTANEO DE OREJUELA IZQUIERDA $1,878,303 $1,896,539 $1,914,775 07.90.45 TRATAMIENTO ENDOVASCULAR DE COARTACI\u00d3N DE AORTA $1,529,840 $1,544,693 $1,559,546 BQ 08. OPERACIONES EN EL APARATO DIGESTIVO Y ABDOMEN"
  },
  {
    "code": "07.90.45",
    "description": "TRATAMIENTO ENDOVASCULAR DE COARTACI\u00d3N DE AORTA",
    "price_hidden": "$1,529,840",
    "coseguro": "$1,544,693",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.04.07",
    "description": "GASTROSTOM\u00cdA POR RADIOSCOP\u00cdA / FIBROSCOP\u00cdA",
    "price_hidden": "$175,734",
    "coseguro": "$177,440",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "GASTROSTOM\u00cdA POR RADIOSCOP\u00cdA / FIBROSCOP\u00cdA $175,734 $177,440 $179,146 08.07.16 COLECISTECTOM\u00cdA CON O SIN COLEDOCOTOM\u00cdA TRANSLAPAROSC\u00d3PICA $740,660 $747,851 $755,042 08.07.22 COLANGIOPANCREATOGRAF\u00cdA ENDOSC\u00d3PICA RETR\u00d3GRADA $298,088 $300,982 $303,876 08.07.23 PAPILOESFINTEROTOM\u00cdA ENDOSC\u00d3PICA CON  EXTRACCI\u00d3N DE C\u00c1LCULO $497,609 $502,440 $507,271 08.50.01 ELASTOGRAFIA HEPATICA $108,015 $109,064 $110,113 08.90.01 COLECTOMIA VIDEO LAPAROSCOPICA $1,233,957 $1,245,937 $1,257,917 08.90.02 APENDICECTOMIA POR VIDEOLAPAROSCOPIA $695,752 $702,507 $709,262 08.90.04 DERMOLIPECTOM\u00cdA POST DESCENSO MASIVO DE PESO $714,736 $721,675 $728,615 08.90.05 HERNIOPLASTIA POR VIDEOLAPAROSCOPIA $695,752 $702,507 $709,262 BQ BQ BQ BQ BQ BQ BQ BQ BQ 10. OPERACIONES EN EL APARATO URINARIO Y GENITALES MASCULINO"
  },
  {
    "code": "08.07.16",
    "description": "COLECISTECTOM\u00cdA CON O SIN COLEDOCOTOM\u00cdA TRANSLAPAROSC\u00d3PICA",
    "price_hidden": "$740,660",
    "coseguro": "$747,851",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.07.22",
    "description": "COLANGIOPANCREATOGRAF\u00cdA ENDOSC\u00d3PICA RETR\u00d3GRADA",
    "price_hidden": "$298,088",
    "coseguro": "$300,982",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.07.23",
    "description": "PAPILOESFINTEROTOM\u00cdA ENDOSC\u00d3PICA CON EXTRACCI\u00d3N DE C\u00c1LCULO",
    "price_hidden": "$497,609",
    "coseguro": "$502,440",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.50.01",
    "description": "ELASTOGRAFIA HEPATICA",
    "price_hidden": "$108,015",
    "coseguro": "$109,064",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.90.01",
    "description": "COLECTOMIA VIDEO LAPAROSCOPICA",
    "price_hidden": "$1,233,957",
    "coseguro": "$1,245,937",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.90.02",
    "description": "APENDICECTOMIA POR VIDEOLAPAROSCOPIA",
    "price_hidden": "$695,752",
    "coseguro": "$702,507",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.90.04",
    "description": "DERMOLIPECTOM\u00cdA POST DESCENSO MASIVO DE PESO",
    "price_hidden": "$714,736",
    "coseguro": "$721,675",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "08.90.05",
    "description": "ESOFAGOGASTRECTOMIA SEGMENTARIA (OPERACI\u00d3N DE BIONDI)",
    "price_hidden": "$505,620",
    "coseguro": "$510,529",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "ESOFAGOGASTRECTOMIA SEGMENTARIA (OPERACI\u00d3N DE BIONDI) $505,620 $510,529 $515,438"
  },
  {
    "code": "10.01.17",
    "description": "NEFROSTOM\u00cdA PERCUT\u00c1NEA",
    "price_hidden": "$213,197",
    "coseguro": "$215,267",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "NEFROSTOM\u00cdA PERCUT\u00c1NEA   $213,197 $215,267 $217,337 10.01.25 LITOTRICIA EXTRACORP\u00d3REA  RENAL $356,267 $359,726 $363,185 10.90.02 NEFRECTOMIA POR VIDEOSCOPIA $1,220,206 $1,232,053 $1,243,900 10.90.03 ADRENALECTOMIA POR VIDEOSCOPIA $980,291 $989,809 $999,326 10.90.05 PROSTATECTOMIA RADICAL POR VIA VIDEO LAPAR\u00d3SCOPIA $1,295,359 $1,307,935 $1,320,512 10.90.06 ADENOMECTOMIA DE PROSTATA POR VIA VIDEO LAPAR\u00d3SCOPIA $1,121,806 $1,132,697 $1,143,589 BQ BQ BQ BQ BQ BQ 11. OPERACIONES EN EL APARATO GENITAL FEMENINO Y OBSTETRICAS"
  },
  {
    "code": "10.01.25",
    "description": "LITOTRICIA EXTRACORP\u00d3REA RENAL",
    "price_hidden": "$356,267",
    "coseguro": "$359,726",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "10.90.02",
    "description": "NEFRECTOMIA POR VIDEOSCOPIA",
    "price_hidden": "$1,220,206",
    "coseguro": "$1,232,053",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "10.90.03",
    "description": "ADRENALECTOMIA POR VIDEOSCOPIA",
    "price_hidden": "$980,291",
    "coseguro": "$989,809",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "10.90.05",
    "description": "METOIDOPLASTIA",
    "price_hidden": "$6,563,813",
    "coseguro": "$6,627,540",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "METOIDOPLASTIA $6,563,813 $6,627,540 $6,691,266 IMPLANTE COCLEAR OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "10.90.06",
    "description": "ADENOMECTOMIA DE PROSTATA POR VIA VIDEO LAPAR\u00d3SCOPIA",
    "price_hidden": "$1,121,806",
    "coseguro": "$1,132,697",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.02.13",
    "description": "CONIZACI\u00d3N DE CUELLO",
    "price_hidden": "$141,520",
    "coseguro": "$142,894",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "CONIZACI\u00d3N DE CUELLO $141,520 $142,894 $144,268 11.05.02 VIDEOHISTEROSCOP\u00cdA DIAGN\u00d3STICA $142,918 $144,306 $145,693 11.05.03 VIDEOHISTEROSCOP\u00cdA TERAP\u00c9UTICA $574,885 $580,467 $586,048 11.90.01 VIDEOLAPAROSCOPIA GINECOLOGICA DIAGNOSTICA $747,603 $754,861 $762,119 11.90.02 VIDEOLAPAROSCOPIA GINECOLOGICA TERAPEUTICA SIMPLE $888,754 $897,383 $906,012 11.90.03 VIDEOLAPAROSCOPIA GINECOLOGICA TERAPEUTICA COMPLEJA $1,305,269 $1,317,941 $1,330,614 BQ BQ BQ BQ BQ BQ 12. OPERACIONES EN EL SISTEMA MUSCULO ESQUELETICO"
  },
  {
    "code": "11.05.02",
    "description": "VIDEOHISTEROSCOP\u00cdA DIAGN\u00d3STICA",
    "price_hidden": "$142,918",
    "coseguro": "$144,306",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.05.03",
    "description": "VIDEOHISTEROSCOP\u00cdA TERAP\u00c9UTICA",
    "price_hidden": "$574,885",
    "coseguro": "$580,467",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.90.01",
    "description": "VIDEOLAPAROSCOPIA GINECOLOGICA DIAGNOSTICA",
    "price_hidden": "$747,603",
    "coseguro": "$754,861",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.90.02",
    "description": "VIDEOLAPAROSCOPIA GINECOLOGICA TERAPEUTICA SIMPLE",
    "price_hidden": "$888,754",
    "coseguro": "$897,383",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.90.03",
    "description": "VIDEOLAPAROSCOPIA GINECOLOGICA TERAPEUTICA COMPLEJA",
    "price_hidden": "$1,305,269",
    "coseguro": "$1,317,941",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "12.20.01",
    "description": "ARTROSCOP\u00cdA DE HOMBRO",
    "price_hidden": "$666,525",
    "coseguro": "$672,996",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "ARTROSCOP\u00cdA DE HOMBRO $666,525 $672,996 $679,467 12.20.02 ARTROSCOP\u00cdA DE RODILLA SIMPLE $578,535 $584,152 $589,769 12.20.03 ARTROSCOP\u00cdA DE RODILLA COMPLEJA $775,844 $783,377 $790,909 12.90.01 ARTROSCOP\u00cdA DE TOBILLO / MU\u00d1ECA $391,502 $395,303 $399,104 12.90.02 APLICACI\u00d3N DE BOTOX $78,206 $78,965 $79,725 12.90.03 ARTROSCOPIA DE CADERA $1,013,178 $1,023,015 $1,032,852 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "12.20.02",
    "description": "ARTROSCOP\u00cdA DE RODILLA SIMPLE",
    "price_hidden": "$578,535",
    "coseguro": "$584,152",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "12.20.03",
    "description": "ARTROSCOP\u00cdA DE RODILLA COMPLEJA",
    "price_hidden": "$775,844",
    "coseguro": "$783,377",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "12.90.01",
    "description": "ARTROSCOP\u00cdA DE TOBILLO / MU\u00d1ECA",
    "price_hidden": "$391,502",
    "coseguro": "$395,303",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "12.90.02",
    "description": "APLICACI\u00d3N DE BOTOX",
    "price_hidden": "$78,206",
    "coseguro": "$78,965",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "12.90.03",
    "description": "ARTROSCOPIA DE CADERA",
    "price_hidden": "$1,013,178",
    "coseguro": "$1,023,015",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "12.90.10",
    "description": "MOVILIZACI\u00d3N FORZADA DE ARTICULACI\u00d3N BAJO ANESTESIA GENERAL",
    "price_hidden": "$43,629",
    "coseguro": "$44,053",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "MOVILIZACI\u00d3N FORZADA DE ARTICULACI\u00d3N BAJO ANESTESIA GENERAL $43,629 $44,053 $44,476 20 13. OPERACIONES EN LA PIEL Y TEJIDO CELULAR SUBCUTANEO"
  },
  {
    "code": "13.90.05",
    "description": "DERMATOSCOP\u00cdA DIGITAL CON MAPEO CORPORAL TOTAL",
    "price_hidden": "$123,300",
    "coseguro": "$124,497",
    "bonos": "24",
    "source": "MEDICAS",
    "normativa": "DERMATOSCOP\u00cdA DIGITAL CON MAPEO CORPORAL TOTAL $123,300 $124,497 $125,694 13.90.06 TRATAMIENTO DEL QUEMADO - SESI\u00d3N BALNEOTERAPIA $49,031 $49,507 $49,983 13.90.07 CIRUGIA DE MOHS $2,060,000 $2,080,000 $2,100,000 24 BQ BQ 14. ALERGIA"
  },
  {
    "code": "13.90.06",
    "description": "TRATAMIENTO DEL QUEMADO - SESI\u00d3N BALNEOTERAPIA",
    "price_hidden": "$49,031",
    "coseguro": "$49,507",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "13.90.07",
    "description": "CIRUGIA DE MOHS",
    "price_hidden": "$2,060,000",
    "coseguro": "$2,080,000",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "14.50.01",
    "description": "PRICK TEST",
    "price_hidden": "$13,472",
    "coseguro": "$13,603",
    "bonos": "12",
    "source": "MEDICAS",
    "normativa": "PRICK TEST $13,472 $13,603 $13,733 12 15. ANATOMIA PATOLOGICA"
  },
  {
    "code": "15.01.06",
    "description": "CITOLOG\u00cdA EXFOLIATIVA ONCOL\u00d3GICA - PAP",
    "price_hidden": "$10,700",
    "coseguro": "$10,804",
    "bonos": "8",
    "source": "MEDICAS",
    "normativa": "CITOLOG\u00cdA EXFOLIATIVA ONCOL\u00d3GICA - PAP $10,700 $10,804 $10,908 15.02.01 $412,000 $416,000 $420,000 15.50.17 T\u00c9CNICA INMUNOHISTOQU\u00cdMICA $184,370 $186,160 $187,950 15.50.01 HIBRIDACI\u00d3N IN SITU $26,384 $26,640 $26,896 15.50.02 BIOPSIA DE VELLOSIDADES CORI\u00d3NICAS $116,800 $117,934 $119,068 15.50.03 BIOPSIA MUSCULAR POR M.E. $127,644 $128,883 $130,122 15.50.04 CITOGENETICO DE MEDULA OSEA - INMUNOMARCACION $309,000 $312,000 $315,000 15.50.11 MICROSCOPIA OPTICA MAS INMUNOFLUORESCENCIA RENAL T\u00c9CNICA INMUNOHISTOQU\u00cdMICA (Inestablidad microsatelital /   PDL - 1 / Diagn\u00f3stico 16. ANESTESIOLOGIA"
  },
  {
    "code": "15.02.01",
    "description": "T\u00c9CNICA INMUNOHISTOQU\u00cdMICA (Inestablidad microsatelital / PDL - 1 / Diagn\u00f3stico",
    "price_hidden": "$412,000",
    "coseguro": "$416,000",
    "bonos": "35",
    "source": "MEDICAS"
  },
  {
    "code": "15.50.17",
    "description": "T\u00c9CNICA INMUNOHISTOQU\u00cdMICA",
    "price_hidden": "$184,370",
    "coseguro": "$186,160",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "15.50.01",
    "description": "HIBRIDACI\u00d3N IN SITU",
    "price_hidden": "$26,384",
    "coseguro": "$26,640",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "15.50.02",
    "description": "BIOPSIA DE VELLOSIDADES CORI\u00d3NICAS",
    "price_hidden": "$116,800",
    "coseguro": "$117,934",
    "bonos": "23",
    "source": "MEDICAS"
  },
  {
    "code": "15.50.03",
    "description": "BIOPSIA MUSCULAR POR M.E.",
    "price_hidden": "$127,644",
    "coseguro": "$128,883",
    "bonos": "25",
    "source": "MEDICAS"
  },
  {
    "code": "15.50.04",
    "description": "CITOGENETICO DE MEDULA OSEA - INMUNOMARCACION",
    "price_hidden": "$309,000",
    "coseguro": "$312,000",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "15.50.11",
    "description": "MICROSCOPIA OPTICA MAS INMUNOFLUORESCENCIA RENAL seg\u00fan",
    "price_hidden": "presupuesto",
    "coseguro": "seg\u00fan presupuesto",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "16.90.01",
    "description": "M\u00d3DULO 1: DROGAS ANESTESICAS EN PROCEDIMIENTOS AMBULATORIOS",
    "price_hidden": "$7,978",
    "coseguro": "$8,055",
    "bonos": "7",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1: DROGAS ANESTESICAS EN PROCEDIMIENTOS AMBULATORIOS $7,978 $8,055 $8,133 16.90.02 M\u00d3DULO 2: DROGAS ANESTESICAS EN PROCEDIMIENTOS AMBULATORIOS $9,260 $9,350 $9,440 7 8 17. CARDIOLOGIA"
  },
  {
    "code": "16.90.02",
    "description": "M\u00d3DULO 2: DROGAS ANESTESICAS EN PROCEDIMIENTOS AMBULATORIOS",
    "price_hidden": "$9,260",
    "coseguro": "$9,350",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "17.01.18",
    "description": "ELECTROCARDIOGRAMA DE HOLTER POR 24 HS",
    "price_hidden": "$24,128",
    "coseguro": "$24,362",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "ELECTROCARDIOGRAMA DE HOLTER POR 24 HS $24,128 $24,362 $24,597 17.01.19 TILT TEST      $26,710 $26,969 $27,228 17.01.20 MONITOREO AMBULATORIO DE LA TENSI\u00d3N ARTERIAL (PRESUROMETRIA) $24,128 $24,362 $24,597 17.02.02 ESTUDIO ELECTROFISIOL\u00d3GICO COMPLETO $474,357 $478,962 $483,567 17.50.01 TEST DE CAMINATA 6\u00b4 $19,394 $19,583 $19,771 17.50.02 TEST DE CAMINATA 6\u00b4 CON OX\u00cdGENO $22,941 $23,164 $23,387 17.50.03 ERGOMETR\u00cdA COMPUTARIZADA $15,993 $16,148 $16,304 17.50.04 CONTROL TELEMETRICO DE DISPOSITIVOS CARDIACOS $16,886 $17,050 $17,214 8 6 18. ECOGRAFIA - ECO DOPPLER"
  },
  {
    "code": "17.01.19",
    "description": "TILT TEST",
    "price_hidden": "$26,710",
    "coseguro": "$26,969",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "17.01.20",
    "description": "MONITOREO AMBULATORIO DE LA TENSI\u00d3N ARTERIAL (PRESUROMETRIA)",
    "price_hidden": "$24,128",
    "coseguro": "$24,362",
    "bonos": "14",
    "source": "MEDICAS"
  },
  {
    "code": "17.02.02",
    "description": "ESTUDIO ELECTROFISIOL\u00d3GICO COMPLETO",
    "price_hidden": "$474,357",
    "coseguro": "$478,962",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "17.50.01",
    "description": "TEST DE CAMINATA 6\u00b4",
    "price_hidden": "$19,394",
    "coseguro": "$19,583",
    "bonos": "10",
    "source": "MEDICAS"
  },
  {
    "code": "17.50.02",
    "description": "TEST DE CAMINATA 6\u00b4 CON OX\u00cdGENO",
    "price_hidden": "$22,941",
    "coseguro": "$23,164",
    "bonos": "12",
    "source": "MEDICAS"
  },
  {
    "code": "17.50.03",
    "description": "ERGOMETR\u00cdA COMPUTARIZADA",
    "price_hidden": "$15,993",
    "coseguro": "$16,148",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "17.50.04",
    "description": "CONTROL TELEMETRICO DE DISPOSITIVOS CARDIACOS",
    "price_hidden": "$16,886",
    "coseguro": "$17,050",
    "bonos": "6",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.01",
    "description": "ECOCARDIOGRAMA COMPLETO A M y B",
    "price_hidden": "$14,151",
    "coseguro": "$14,289",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "ECOCARDIOGRAMA COMPLETO A M y B $14,151 $14,289 $14,426 18.01.06 ECOGRAF\u00cdA MAMARIA UNI O BILATERAL $23,456 $23,684 $23,911 18.01.07 ECOGRAF\u00cdA CEREBRAL CON MODO B y A $16,201 $16,359 $16,516 18.01.10 ECOGRAF\u00cdA TIROIDEA $16,201 $16,359 $16,516 18.01.11 ECOGRAF\u00cdA DE TEST\u00cdCULOS $16,201 $16,359 $16,516 18.01.12 ECOGRAF\u00cdA COMPLETA DE ABDOMEN $26,807 $27,067 $27,327 18.01.13 ECOGRAF\u00cdA HEP\u00c1TICA, BILIAR, ESPL\u00c9NICA O TOR\u00c1CICA $16,201 $16,359 $16,516 18.01.17 ECOGRAF\u00cdA DE AORTA ABDOMINAL (DIN\u00c1MICA Y EST\u00c1TICA) $16,201 $16,359 $16,516 18.01.18 ECOGRAF\u00cdA PANCREATICA O SUPRARRENAL $16,201 $16,359 $16,516 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "18.01.06",
    "description": "ECOGRAF\u00cdA MAMARIA UNI O BILATERAL",
    "price_hidden": "$23,456",
    "coseguro": "$23,684",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.07",
    "description": "ECOGRAF\u00cdA CEREBRAL CON MODO B y A",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.10",
    "description": "ECOGRAF\u00cdA TIROIDEA",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.11",
    "description": "ECOGRAF\u00cdA DE TEST\u00cdCULOS",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.12",
    "description": "ECOGRAF\u00cdA COMPLETA DE ABDOMEN",
    "price_hidden": "$26,807",
    "coseguro": "$27,067",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.13",
    "description": "ECOGRAF\u00cdA HEP\u00c1TICA, BILIAR, ESPL\u00c9NICA O TOR\u00c1CICA",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.17",
    "description": "ECOGRAF\u00cdA DE AORTA ABDOMINAL (DIN\u00c1MICA Y EST\u00c1TICA)",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.18",
    "description": "ECOGRAF\u00cdA PANCREATICA O SUPRARRENAL",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.21",
    "description": "ECOGRAF\u00cdA PARA LA AMNIOCENTESIS",
    "price_hidden": "$27,901",
    "coseguro": "$28,172",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "ECOGRAF\u00cdA PARA LA AMNIOCENTESIS $27,901 $28,172 $28,442 18.02.02 ECO-DOPPLER VASCULAR PERIF\u00c9RICO $46,548 $47,000 $47,452 18.03.01 ECO-DOPPLER CARD\u00cdACO COLOR   $63,523 $64,140 $64,757 18.03.02 ECOCARDIOGRAMA DE STRESS F\u00cdSICO O FARMACOL\u00d3GICO $69,921 $70,600 $71,279 18.04.02 ECO-DOPPLER TRANSESOF\u00c1GICO COLOR $111,848 $112,934 $114,020 18.06.01 ECOGRAF\u00cdA DE PARTES BLANDAS $16,754 $16,916 $17,079 18.50.01 ECOGRAF\u00cdA CON TRANSLUCENCIA NUCAL $21,880 $22,092 $22,305 18.50.02 ECOGRAF\u00cdA DE CADERA $16,201 $16,359 $16,516 18.50.03 ECOGRAF\u00cdA INTRAOPERATORIA $45,101 $45,538 $45,976 18.50.04 ECOGRAF\u00cdA ENDOANAL $42,577 $42,990 $43,403 18.50.05 ECOGRAF\u00cdA ENDOCAVITARIA VAGINAL $30,158 $30,451 $30,744 18.50.06 ECOGRAF\u00cdA OTRAS REGIONES $12,643 $12,766 $12,888 18.50.09 ECOGRAF\u00cdA ENDOCAVITARIA PROST\u00c1TICA $30,158 $30,451 $30,744 18.50.40 ECO-DOPPLER VASCULAR FETAL $44,936 $45,372 $45,808 18.50.41 ECO-DOPPLER OTRAS REGIONES $43,994 $44,421 $44,848 18.50.80 PUNCI\u00d3N BIOPSIA DE OVARIO BAJO ECOGRAF\u00cdA $154,137 $155,634 $157,130 18.50.81 PUNCI\u00d3N BIOPSIA DE PR\u00d3STATA BAJO ECOGRAF\u00cdA      $154,137 $155,634 $157,130 18.50.82 PUNCI\u00d3N BIOPSIA DE TIROIDES BAJO ECOGRAF\u00cdA $154,137 $155,634 $157,130 18.50.83 PUNCI\u00d3N BIOPSIA RENAL BAJO ECOGRAF\u00cdA $154,137 $155,634 $157,130 18.50.84 PUNCI\u00d3N DE MAMA BAJO ECOGRAF\u00cdA $154,137 $155,634 $157,130 18.50.85 ECOGRAFIA RENOVESICOPROSTATICA COMPLETA $23,587 $23,816 $24,045 18.90.01 PUNCI\u00d3N BIOPSIA ESTEREOT\u00c1XICA INTRA-AXIAL GUIADA POR TAC $574,951 $580,533 $586,115 11 11 12 12 20 11 11 11 11 11 11 11 11 11 11 28 28 28 28 28 11 BQ 20. GASTROENTEROLOGIA"
  },
  {
    "code": "18.02.02",
    "description": "ECO-DOPPLER VASCULAR PERIF\u00c9RICO",
    "price_hidden": "$46,548",
    "coseguro": "$47,000",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.03.01",
    "description": "ECO-DOPPLER CARD\u00cdACO COLOR",
    "price_hidden": "$63,523",
    "coseguro": "$64,140",
    "bonos": "12",
    "source": "MEDICAS"
  },
  {
    "code": "18.03.02",
    "description": "ECOCARDIOGRAMA DE STRESS F\u00cdSICO O FARMACOL\u00d3GICO",
    "price_hidden": "$69,921",
    "coseguro": "$70,600",
    "bonos": "12",
    "source": "MEDICAS"
  },
  {
    "code": "18.04.02",
    "description": "ECO-DOPPLER TRANSESOF\u00c1GICO COLOR",
    "price_hidden": "$111,848",
    "coseguro": "$112,934",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "18.06.01",
    "description": "ECOGRAF\u00cdA DE PARTES BLANDAS",
    "price_hidden": "$16,754",
    "coseguro": "$16,916",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.01",
    "description": "ECOGRAF\u00cdA CON TRANSLUCENCIA NUCAL",
    "price_hidden": "$21,880",
    "coseguro": "$22,092",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.02",
    "description": "ECOGRAF\u00cdA DE CADERA",
    "price_hidden": "$16,201",
    "coseguro": "$16,359",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.03",
    "description": "ECOGRAF\u00cdA INTRAOPERATORIA",
    "price_hidden": "$45,101",
    "coseguro": "$45,538",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.04",
    "description": "ECOGRAF\u00cdA ENDOANAL",
    "price_hidden": "$42,577",
    "coseguro": "$42,990",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.05",
    "description": "ECOGRAF\u00cdA ENDOCAVITARIA VAGINAL",
    "price_hidden": "$30,158",
    "coseguro": "$30,451",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.06",
    "description": "ECOGRAF\u00cdA OTRAS REGIONES",
    "price_hidden": "$12,643",
    "coseguro": "$12,766",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.09",
    "description": "ECOGRAF\u00cdA ENDOCAVITARIA PROST\u00c1TICA",
    "price_hidden": "$30,158",
    "coseguro": "$30,451",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.40",
    "description": "ECO-DOPPLER VASCULAR FETAL",
    "price_hidden": "$44,936",
    "coseguro": "$45,372",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.41",
    "description": "ECO-DOPPLER OTRAS REGIONES",
    "price_hidden": "$43,994",
    "coseguro": "$44,421",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.80",
    "description": "PUNCI\u00d3N BIOPSIA DE OVARIO BAJO ECOGRAF\u00cdA",
    "price_hidden": "$154,137",
    "coseguro": "$155,634",
    "bonos": "28",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.81",
    "description": "PUNCI\u00d3N BIOPSIA DE PR\u00d3STATA BAJO ECOGRAF\u00cdA",
    "price_hidden": "$154,137",
    "coseguro": "$155,634",
    "bonos": "28",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.82",
    "description": "PUNCI\u00d3N BIOPSIA DE TIROIDES BAJO ECOGRAF\u00cdA",
    "price_hidden": "$154,137",
    "coseguro": "$155,634",
    "bonos": "28",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.83",
    "description": "PUNCI\u00d3N BIOPSIA RENAL BAJO ECOGRAF\u00cdA",
    "price_hidden": "$154,137",
    "coseguro": "$155,634",
    "bonos": "28",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.84",
    "description": "PUNCI\u00d3N DE MAMA BAJO ECOGRAF\u00cdA",
    "price_hidden": "$154,137",
    "coseguro": "$155,634",
    "bonos": "28",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.85",
    "description": "ECOGRAFIA RENOVESICOPROSTATICA COMPLETA",
    "price_hidden": "$23,587",
    "coseguro": "$23,816",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "18.90.01",
    "description": "PUNCI\u00d3N BIOPSIA ESTEREOT\u00c1XICA INTRA-AXIAL GUIADA POR TAC",
    "price_hidden": "$574,951",
    "coseguro": "$580,533",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.01.11",
    "description": "MANOMETR\u00cdA ESOF\u00c1GICA",
    "price_hidden": "$92,983",
    "coseguro": "$93,885",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "MANOMETR\u00cdA ESOF\u00c1GICA $92,983 $93,885 $94,788 20.01.22 VIDEOESOFAGOGASTRODUODENOFIBROSCOP\u00cdA (VEDA) $91,639 $92,528 $93,418 20.01.24 VIDEOCOLONOFIBROSCOP\u00cdA (VCC) $122,354 $123,542 $124,730 20.01.26 RECTOSIGMOIDEOFIBROSCOP\u00cdA $46,690 $47,143 $47,596 20.01.34 POLIPECTOM\u00cdA ENDOSC\u00d3PICA G\u00c1STRICA $154,166 $155,663 $157,160 20.01.35 POLIPECTOM\u00cdA ENDOSC\u00d3PICA COL\u00d3NICA $177,884 $179,611 $181,338 20.05.01 PH METR\u00cdA ESOF\u00c1GICA EN LACTANTES $33,624 $33,951 $34,277 20.50.01 BIOPSIA HEP\u00c1TICA POST-TRANSPLANTE HEP\u00c1TICO $343,954 $347,293 $350,632 20.50.02 MANOMETR\u00cdA ANORECTAL $94,868 $95,789 $96,710 20.50.03 VIDEODEGLUCI\u00d3N   $27,236 $27,500 $27,764 20.50.06 ECOENDOSCOPIA BILIOPANCRE\u00c1TICA CON O SIN PUNCI\u00d3N $2,884,000 $2,912,000 $2,940,000"
  },
  {
    "code": "20.01.22",
    "description": "VIDEOESOFAGOGASTRODUODENOFIBROSCOP\u00cdA (VEDA)",
    "price_hidden": "$91,639",
    "coseguro": "$92,528",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.01.24",
    "description": "VIDEOCOLONOFIBROSCOP\u00cdA (VCC)",
    "price_hidden": "$122,354",
    "coseguro": "$123,542",
    "bonos": "24",
    "source": "MEDICAS"
  },
  {
    "code": "20.01.26",
    "description": "RECTOSIGMOIDEOFIBROSCOP\u00cdA",
    "price_hidden": "$46,690",
    "coseguro": "$47,143",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.01.34",
    "description": "POLIPECTOM\u00cdA ENDOSC\u00d3PICA G\u00c1STRICA",
    "price_hidden": "$154,166",
    "coseguro": "$155,663",
    "bonos": "30",
    "source": "MEDICAS"
  },
  {
    "code": "20.01.35",
    "description": "POLIPECTOM\u00cdA ENDOSC\u00d3PICA COL\u00d3NICA",
    "price_hidden": "$177,884",
    "coseguro": "$179,611",
    "bonos": "35",
    "source": "MEDICAS"
  },
  {
    "code": "20.05.01",
    "description": "PH METR\u00cdA ESOF\u00c1GICA EN LACTANTES",
    "price_hidden": "$33,624",
    "coseguro": "$33,951",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.50.01",
    "description": "BIOPSIA HEP\u00c1TICA POST-TRANSPLANTE HEP\u00c1TICO",
    "price_hidden": "$343,954",
    "coseguro": "$347,293",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.50.02",
    "description": "MANOMETR\u00cdA ANORECTAL",
    "price_hidden": "$94,868",
    "coseguro": "$95,789",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.50.03",
    "description": "VIDEODEGLUCI\u00d3N",
    "price_hidden": "$27,236",
    "coseguro": "$27,500",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.50.06",
    "description": "ECOENDOSCOPIA BILIOPANCRE\u00c1TICA CON O SIN PUNCI\u00d3N",
    "price_hidden": "$2,884,000",
    "coseguro": "$2,912,000",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.50.04",
    "description": "MODULO VIDEOENDOSCOPIA DIGESTIVA ALTA Y BAJA (VEDA + VCC)",
    "price_hidden": "$213,993",
    "coseguro": "$216,070",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "MODULO VIDEOENDOSCOPIA DIGESTIVA ALTA Y BAJA (VEDA + VCC) $213,993 $216,070 $218,148 20.90.01 COLOCACI\u00d3N DE ENDOPR\u00d3TESIS ESOFAGICA $176,183 $177,893 $179,604 20.90.02 DILATACI\u00d3N ESOF\u00c1GICA ENDOSCOPICA $84,840 $85,664 $86,487 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "20.90.01",
    "description": "COLOCACI\u00d3N DE ENDOPR\u00d3TESIS ESOFAGICA",
    "price_hidden": "$176,183",
    "coseguro": "$177,893",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.02",
    "description": "DILATACI\u00d3N ESOF\u00c1GICA ENDOSCOPICA",
    "price_hidden": "$84,840",
    "coseguro": "$85,664",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.03",
    "description": "DRENAJE PERCUT\u00c1NEO BILIAR",
    "price_hidden": "$300,545",
    "coseguro": "$303,463",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "DRENAJE PERCUT\u00c1NEO BILIAR $300,545 $303,463 $306,381 20.90.04 ENTEROCLISIS BAJO TAC $124,776 $125,988 $127,199 20.90.05 ESCLEROSIS DE LESI\u00d3N SANGRANTE G\u00c1STRICA O ESOF\u00c1GICA $65,661 $66,298 $66,936 20.90.06 ESCLEROSIS DE V\u00c1RICES ESOF\u00c1GICAS $160,160 $161,715 $163,270 20.90.07 LIGADURAS DE V\u00c1RICES ESOF\u00c1GICAS $163,237 $164,822 $166,407 20.90.08 EXTRACCI\u00d3N CUERPO EXTRA\u00d1O ESOF\u00c1GICO $70,269 $70,952 $71,634 20.90.09 M\u00d3DULO QUIMIOEMBOLIZACI\u00d3N DE N\u00d3DULOS HEP\u00c1TICOS $2,807,785 $2,835,045 $2,862,305 20.90.10 COLOCACI\u00d3N DE ENDOPROTESIS EN LA VIA BILIAR POR VIA ENDOSCOPICA $162,105 $163,678 $165,252 20.90.11 USO DE ARG\u00d3N PLASMA $311,645 $314,671 $317,697 20.90.12 MUCOSECTOM\u00cdA ENDOSC\u00d3PICA $148,143 $149,581 $151,020 20.90.18 M\u00d3DULO RECAMBIO BOTON GASTRICO $25,800 $25,800 $25,800 20.90.19 M\u00d3DULO RECAMBIO BOTON GASTRICO (incluye bot\u00f3n) $911,379 $920,228 $929,076 20 BQ 21. GENETICA HUMANA"
  },
  {
    "code": "20.90.04",
    "description": "ENTEROCLISIS BAJO TAC",
    "price_hidden": "$124,776",
    "coseguro": "$125,988",
    "bonos": "24",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.05",
    "description": "ESCLEROSIS DE LESI\u00d3N SANGRANTE G\u00c1STRICA O ESOF\u00c1GICA",
    "price_hidden": "$65,661",
    "coseguro": "$66,298",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.06",
    "description": "ESCLEROSIS DE V\u00c1RICES ESOF\u00c1GICAS",
    "price_hidden": "$160,160",
    "coseguro": "$161,715",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.07",
    "description": "LIGADURAS DE V\u00c1RICES ESOF\u00c1GICAS",
    "price_hidden": "$163,237",
    "coseguro": "$164,822",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.08",
    "description": "EXTRACCI\u00d3N CUERPO EXTRA\u00d1O ESOF\u00c1GICO",
    "price_hidden": "$70,269",
    "coseguro": "$70,952",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.09",
    "description": "M\u00d3DULO QUIMIOEMBOLIZACI\u00d3N DE N\u00d3DULOS HEP\u00c1TICOS",
    "price_hidden": "$2,807,785",
    "coseguro": "$2,835,045",
    "bonos": "BPE",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.10",
    "description": "COLOCACI\u00d3N DE ENDOPROTESIS EN LA VIA BILIAR POR VIA ENDOSCOPICA",
    "price_hidden": "$162,105",
    "coseguro": "$163,678",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.11",
    "description": "USO DE ARG\u00d3N PLASMA",
    "price_hidden": "$311,645",
    "coseguro": "$314,671",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.12",
    "description": "MUCOSECTOM\u00cdA ENDOSC\u00d3PICA",
    "price_hidden": "$148,143",
    "coseguro": "$149,581",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.18",
    "description": "M\u00d3DULO RECAMBIO BOTON GASTRICO",
    "price_hidden": "$25,800",
    "coseguro": "$25,800",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "20.90.19",
    "description": "M\u00d3DULO RECAMBIO BOTON GASTRICO (incluye bot\u00f3n)",
    "price_hidden": "$911,379",
    "coseguro": "$920,228",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "21.01.04",
    "description": "ANALISIS CROMOSOMICO DE CARIOTIPO SIMPLE",
    "price_hidden": "$45,527",
    "coseguro": "$45,969",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "ANALISIS CROMOSOMICO DE CARIOTIPO SIMPLE                                $45,527 $45,969 $46,411 20 22. GINECOLOGIA Y OBSTETRICIA"
  },
  {
    "code": "22.01.08",
    "description": "CEPILLADO DE EPITELIO VAGINAL Y CERVICAL",
    "price_hidden": "$5,402",
    "coseguro": "$5,455",
    "bonos": "5",
    "source": "MEDICAS",
    "normativa": "CEPILLADO DE EPITELIO VAGINAL Y CERVICAL $5,402 $5,455 $5,507 5 23. HEMATOLOGIA"
  },
  {
    "code": "23.50.01",
    "description": "DOSAJE DIMERO-D",
    "price_hidden": "$12,968",
    "coseguro": "$13,094",
    "bonos": "12",
    "source": "MEDICAS",
    "normativa": "DOSAJE DIMERO-D $12,968 $13,094 $13,220 23.50.02 DOSAJE FACTORES K DEPEDIENTES (INCLUYE FACTORES II \u2013 VII \u2013 IX \u2013 YX) $36,737 $37,094 $37,450 23.50.03 ESTUDIO BASICO DE COAGULACION $14,836 $14,980 $15,124 23.50.04 ESTUDIO BASICO DE LAS HEMOGLOBINOPATIAS $52,303 $52,811 $53,319 23.50.05 ESTUDIO INICIAL DE CITOPENIAS AISLADAS O COMBINADAS $14,159 $14,296 $14,434 23.50.06 ESTUDIO DE CITOPENIAS (SEGUIMIENTO) $11,126 $11,234 $11,342 23.50.07 PDF (PRODUCTO DEGRADACION DE FIBRINOGENO) $9,964 $10,061 $10,157 23.50.08 SEGUIMIENTO ANTICOAGULACION CON HEPARINA NO FRACCIONADA $8,743 $8,828 $8,913 23.50.09 SEGUIMIENTO ANTICOAGULACION HEPARINA + ORAL (TRANSICION) $11,939 $12,055 $12,171 23.50.10 SEGUIMIENTO ANTICOAGULACION HEPARINA BAJO PESO MOLECULAR $14,320 $14,459 $14,598 23.50.11 SEGUIMIENTO ANTICOAGULACION ORAL $8,882 $8,968 $9,054 23.50.12 M\u00d3DULO DE ADMINISTRACION DE DROGAS ESPECIALES $19,059 $19,244 $19,429 23.50.13 M\u00d3DULO ESTUDIO DE MEDULA OSEA I $60,931 $61,522 $62,114 23.50.14 M\u00d3DULO ESTUDIO DE MEDULA OSEA II $67,484 $68,139 $68,795 23.50.15 M\u00d3DULO ESTUDIO DE MEDULA OSEA III $33,714 $34,041 $34,369 23.50.16 CITOMETR\u00cdA DE FLUJO M\u00c9DULA \u00d3SEA Y SANGRE PERIF\u00c9RICA $309,000 $312,000 $315,000 8 18 20 20 20 20 24. HEMOTERAPIA"
  },
  {
    "code": "23.50.02",
    "description": "DOSAJE FACTORES K DEPEDIENTES (INCLUYE FACTORES II \u2013 VII \u2013 IX \u2013 YX)",
    "price_hidden": "$36,737",
    "coseguro": "$37,094",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.03",
    "description": "ESTUDIO BASICO DE COAGULACION",
    "price_hidden": "$14,836",
    "coseguro": "$14,980",
    "bonos": "14",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.04",
    "description": "ESTUDIO BASICO DE LAS HEMOGLOBINOPATIAS",
    "price_hidden": "$52,303",
    "coseguro": "$52,811",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.05",
    "description": "ESTUDIO INICIAL DE CITOPENIAS AISLADAS O COMBINADAS",
    "price_hidden": "$14,159",
    "coseguro": "$14,296",
    "bonos": "13",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.06",
    "description": "ESTUDIO DE CITOPENIAS (SEGUIMIENTO)",
    "price_hidden": "$11,126",
    "coseguro": "$11,234",
    "bonos": "10",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.07",
    "description": "PDF (PRODUCTO DEGRADACION DE FIBRINOGENO)",
    "price_hidden": "$9,964",
    "coseguro": "$10,061",
    "bonos": "9",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.08",
    "description": "SEGUIMIENTO ANTICOAGULACION CON HEPARINA NO FRACCIONADA",
    "price_hidden": "$8,743",
    "coseguro": "$8,828",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.09",
    "description": "SEGUIMIENTO ANTICOAGULACION HEPARINA + ORAL (TRANSICION)",
    "price_hidden": "$11,939",
    "coseguro": "$12,055",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.10",
    "description": "SEGUIMIENTO ANTICOAGULACION HEPARINA BAJO PESO MOLECULAR",
    "price_hidden": "$14,320",
    "coseguro": "$14,459",
    "bonos": "13",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.11",
    "description": "SEGUIMIENTO ANTICOAGULACION ORAL",
    "price_hidden": "$8,882",
    "coseguro": "$8,968",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.12",
    "description": "M\u00d3DULO DE ADMINISTRACION DE DROGAS ESPECIALES",
    "price_hidden": "$19,059",
    "coseguro": "$19,244",
    "bonos": "18",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.13",
    "description": "M\u00d3DULO ESTUDIO DE MEDULA OSEA I",
    "price_hidden": "$60,931",
    "coseguro": "$61,522",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.14",
    "description": "M\u00d3DULO ESTUDIO DE MEDULA OSEA II",
    "price_hidden": "$67,484",
    "coseguro": "$68,139",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.15",
    "description": "M\u00d3DULO ESTUDIO DE MEDULA OSEA III",
    "price_hidden": "$33,714",
    "coseguro": "$34,041",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "23.50.16",
    "description": "CITOMETR\u00cdA DE FLUJO M\u00c9DULA \u00d3SEA Y SANGRE PERIF\u00c9RICA",
    "price_hidden": "$309,000",
    "coseguro": "$312,000",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "24.10.05",
    "description": "PLASMAFERESIS",
    "price_hidden": "$1,048,240",
    "coseguro": "$1,058,417",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "PLASMAFERESIS  $1,048,240 $1,058,417 $1,068,594 24.90.01 HEMOTERAPIA/TRANSUSION $149,749 $151,202 $152,656"
  },
  {
    "code": "24.90.01",
    "description": "HEMOTERAPIA/TRANSUSION",
    "price_hidden": "$149,749",
    "coseguro": "$151,202",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "24.90.12",
    "description": "AFERESIS DE PLAQUETAS",
    "price_hidden": "$1,048,240",
    "coseguro": "$1,058,417",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "AFERESIS DE PLAQUETAS $1,048,240 $1,058,417 $1,068,594 S/C 26. MEDICINA NUCLEAR Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "26.02.34",
    "description": "",
    "price_hidden": "$178,145",
    "coseguro": "$179,874",
    "bonos": "35",
    "source": "MEDICAS",
    "normativa": "ESTUDIO FUNCI\u00d3N VENTRICULAR IZQUIERDA Y PERFUSI\u00d3N MIOC\u00c1RDICA CON SPECT (SPECT CARDIACO) $178,145 $179,874 $181,604"
  },
  {
    "code": "26.05.13",
    "description": "BARRIDO CORPORAL TOTAL PARA CARCINOMA DE TIROIDES",
    "price_hidden": "$30,968",
    "coseguro": "$31,269",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "BARRIDO CORPORAL TOTAL PARA CARCINOMA DE TIROIDES $30,968 $31,269 $31,569 26.05.29 FLEBOGRAFIA RADIOISOT\u00d3PICA POR \u00c1REAS $20,847 $21,049 $21,252 26.50.01 CENTELLOGRAMA        $72,405 $73,108 $73,811 26.50.02 DETECCI\u00d3N DE GANGLIO CENTINELA $87,081 $87,926 $88,772 26.50.03 DETECCI\u00d3N DE GANGLIO CENTINELA CON USO DE GAMMA PROBE $201,307 $203,261 $205,216 26.50.04 CURVA DE CAPTACI\u00d3N TIROIDEA $3,304 $3,336 $3,368 3 28. NEUMONOLOGIA"
  },
  {
    "code": "26.05.29",
    "description": "FLEBOGRAFIA RADIOISOT\u00d3PICA POR \u00c1REAS",
    "price_hidden": "$20,847",
    "coseguro": "$21,049",
    "bonos": "19",
    "source": "MEDICAS"
  },
  {
    "code": "26.50.01",
    "description": "CENTELLOGRAMA",
    "price_hidden": "$72,405",
    "coseguro": "$73,108",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "26.50.02",
    "description": "DETECCI\u00d3N DE GANGLIO CENTINELA",
    "price_hidden": "$87,081",
    "coseguro": "$87,926",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "26.50.03",
    "description": "DETECCI\u00d3N DE GANGLIO CENTINELA CON USO DE GAMMA PROBE",
    "price_hidden": "$201,307",
    "coseguro": "$203,261",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "26.50.04",
    "description": "CURVA DE CAPTACI\u00d3N TIROIDEA",
    "price_hidden": "$3,304",
    "coseguro": "$3,336",
    "bonos": "3",
    "source": "MEDICAS"
  },
  {
    "code": "28.50.01",
    "description": "ESPIROMETR\u00cdA COMPUTADA",
    "price_hidden": "$15,961",
    "coseguro": "$16,116",
    "bonos": "10",
    "source": "MEDICAS",
    "normativa": "ESPIROMETR\u00cdA COMPUTADA $15,961 $16,116 $16,271 28.50.02 POLIGRAF\u00cdA RESPIRATORIA $51,139 $51,636 $52,132"
  },
  {
    "code": "28.50.02",
    "description": "POLIGRAF\u00cdA RESPIRATORIA",
    "price_hidden": "$51,139",
    "coseguro": "$51,636",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "28.50.03",
    "description": "TEST DE VASOREACTIVIDAD PULMONAR C/REGISTRO DE RESISTENCIA Y PRESIONES",
    "price_hidden": "$220,445",
    "coseguro": "$222,585",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "TEST DE VASOREACTIVIDAD PULMONAR C/REGISTRO DE RESISTENCIA Y PRESIONES $220,445 $222,585 $224,725"
  },
  {
    "code": "28.50.09",
    "description": "ENDOSCOPIA RESPIRATORIA DIAGANOSTICA (PEDIATRICA-ADULTO)",
    "price_hidden": "$170,915",
    "coseguro": "$172,575",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "ENDOSCOPIA RESPIRATORIA DIAGANOSTICA (PEDIATRICA-ADULTO) $170,915 $172,575 $174,234 28.50.10 ENDOSCOPIA RESPIRATORIA TERAPEUTICA (PEDIATRICA-ADULTO) $267,123 $269,717 $272,310 28.90.01 VIDEOTORACOSCOP\u00cdA DIAGNOSTICA/TERAP\u00c9UTICA GRUPO 1 $796,939 $804,676 $812,414 28.90.04 VIDEOTORACOSCOP\u00cdA TERAP\u00c9UTICA GRUPO 2 $996,174 $1,005,846 $1,015,517 28.90.05 VIDEOTORACOSCOP\u00cdA TERAP\u00c9UTICA GRUPO 3 $1,494,264 $1,508,771 $1,523,279 28.50.12 DLCO (PRUEBA DE DIFUSI\u00d3N PULMONAR DE MON\u00d3XIDO DE CARBONO) $33,693 $34,021 $34,348 20 29. NEUROLOGIA"
  },
  {
    "code": "28.50.10",
    "description": "ENDOSCOPIA RESPIRATORIA TERAPEUTICA (PEDIATRICA-ADULTO)",
    "price_hidden": "$267,123",
    "coseguro": "$269,717",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "28.90.01",
    "description": "VIDEOTORACOSCOP\u00cdA DIAGNOSTICA/TERAP\u00c9UTICA GRUPO 1",
    "price_hidden": "$796,939",
    "coseguro": "$804,676",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "28.90.04",
    "description": "VIDEOTORACOSCOP\u00cdA TERAP\u00c9UTICA GRUPO 2",
    "price_hidden": "$996,174",
    "coseguro": "$1,005,846",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "28.90.05",
    "description": "VIDEOTORACOSCOP\u00cdA TERAP\u00c9UTICA GRUPO 3",
    "price_hidden": "$1,494,264",
    "coseguro": "$1,508,771",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "28.50.12",
    "description": "DLCO (PRUEBA DE DIFUSI\u00d3N PULMONAR DE MON\u00d3XIDO DE CARBONO)",
    "price_hidden": "$33,693",
    "coseguro": "$34,021",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.01.04",
    "description": "ELECTROMIOGRAF\u00cdA DE MIEMBROS SUPERIORES O INFERIORES O FACIAL",
    "price_hidden": "$37,119",
    "coseguro": "$37,479",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "ELECTROMIOGRAF\u00cdA DE MIEMBROS SUPERIORES O INFERIORES O FACIAL $37,119 $37,479 $37,840 29.01.05 ELECTROMIOGRAF\u00cdA CUATRO MIEMBROS $43,262 $43,682 $44,102 29.01.11 POTENCIALES EVOCADOS $21,262 $21,469 $21,675 29.02.02 POLISOMNOGRAF\u00cdA $91,612 $92,502 $93,391 29.50.01 VIDEOELECTROENCEFALOGRAMA POR TELEMETRIA $122,191 $123,377 $124,564 29.50.02 VIDEONISTAGMOGRAF\u00cdA $32,271 $32,584 $32,897 29.50.03 ELECTRORETINOGRAMA COMPUTARIZADO                             $12,832 $12,956 $13,081 29.50.04 EEG SUE\u00d1O VIGILIA PROLONGADO $25,279 $25,525 $25,770 29.50.05 EEG DIGITAL $16,384 $16,543 $16,703 20 20 20 20 20 20 20 20 20 31. OTORRINOLARINGOLOGIA"
  },
  {
    "code": "29.01.05",
    "description": "ELECTROMIOGRAF\u00cdA CUATRO MIEMBROS",
    "price_hidden": "$43,262",
    "coseguro": "$43,682",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.01.11",
    "description": "POTENCIALES EVOCADOS",
    "price_hidden": "$21,262",
    "coseguro": "$21,469",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.02.02",
    "description": "POLISOMNOGRAF\u00cdA",
    "price_hidden": "$91,612",
    "coseguro": "$92,502",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.50.01",
    "description": "VIDEOELECTROENCEFALOGRAMA POR TELEMETRIA",
    "price_hidden": "$122,191",
    "coseguro": "$123,377",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.50.02",
    "description": "VIDEONISTAGMOGRAF\u00cdA",
    "price_hidden": "$32,271",
    "coseguro": "$32,584",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.50.03",
    "description": "ELECTRORETINOGRAMA COMPUTARIZADO",
    "price_hidden": "$12,832",
    "coseguro": "$12,956",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.50.04",
    "description": "EEG SUE\u00d1O VIGILIA PROLONGADO",
    "price_hidden": "$25,279",
    "coseguro": "$25,525",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "29.50.05",
    "description": "EEG DIGITAL",
    "price_hidden": "$16,384",
    "coseguro": "$16,543",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "31.01.23",
    "description": "RINOSINUSOFIBROSCOP\u00cdA DIAGN\u00d3STICA",
    "price_hidden": "$18,984",
    "coseguro": "$19,169",
    "bonos": "9",
    "source": "MEDICAS",
    "normativa": "RINOSINUSOFIBROSCOP\u00cdA DIAGN\u00d3STICA $18,984 $19,169 $19,353 31.01.24 FARINGOLARINGOFIBROSCOP\u00cdA $28,027 $28,299 $28,572 9 20 34. RADIOLOGIA (TAC-RMN)"
  },
  {
    "code": "31.01.24",
    "description": "FARINGOLARINGOFIBROSCOP\u00cdA",
    "price_hidden": "$28,027",
    "coseguro": "$28,299",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.01",
    "description": "TAC CEREBRAL",
    "price_hidden": "$55,736",
    "coseguro": "$56,278",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "TAC CEREBRAL $55,736 $56,278 $56,819 34.10.03 TAC CEREBRAL DE CONTROL (CON O SIN REFUERZO) $50,248 $50,736 $51,224 34.10.04 TAC OFTALMOLOGICA $35,601 $35,946 $36,292 34.10.05 TAC TIROIDEA $38,626 $39,001 $39,376 34.10.06 TAC MAMARIA $50,287 $50,776 $51,264 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "34.10.03",
    "description": "TAC CEREBRAL DE CONTROL (CON O SIN REFUERZO)",
    "price_hidden": "$50,248",
    "coseguro": "$50,736",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.04",
    "description": "TAC OFTALMOLOGICA",
    "price_hidden": "$35,601",
    "coseguro": "$35,946",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.05",
    "description": "TAC TIROIDEA",
    "price_hidden": "$38,626",
    "coseguro": "$39,001",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.06",
    "description": "TAC MAMARIA",
    "price_hidden": "$50,287",
    "coseguro": "$50,776",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.07",
    "description": "TAC GINECOLOGICA",
    "price_hidden": "$50,248",
    "coseguro": "$50,736",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "TAC GINECOLOGICA $50,248 $50,736 $51,224 34.10.08 TAC COMPLETA ABDOMEN $60,556 $61,144 $61,732 34.10.09 TAC HEPATOBILIAR, ESPL\u00c9NICA, PANCRE\u00c1TICA, RENAL, SUPRARRENAL $50,295 $50,783 $51,272 34.10.10 TAC TORACICA $59,295 $59,870 $60,446 34.10.11 TAC VEJIGA Y PROSTATA $50,248 $50,736 $51,224 34.10.12 TAC DE OTROS ORGANOS  O REGIONES $50,248 $50,736 $51,224 34.10.13 TAC DE COLUMNA 1 REGI\u00d3N $50,248 $50,736 $51,224 34.50.88 TAC CEREBRAL CON CONTRASTE $50,248 $50,736 $51,224 34.50.89 TAC COMPLETA ABDOMEN CON CONTRASTE $88,990 $89,854 $90,718 34.50.90 TAC DE COLUMNA 1 REGI\u00d3N CON CONTRASTE $65,412 $66,047 $66,682 34.50.91 TAC DE OTROS ORGANOS  O REGIONES CON CONTRASTE $65,412 $66,047 $66,682 34.50.92 TAC GINECOLOGICA CON CONTRASTE $66,702 $67,349 $67,997"
  },
  {
    "code": "34.10.08",
    "description": "TAC COMPLETA ABDOMEN",
    "price_hidden": "$60,556",
    "coseguro": "$61,144",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.09",
    "description": "TAC HEPATOBILIAR, ESPL\u00c9NICA, PANCRE\u00c1TICA, RENAL, SUPRARRENAL",
    "price_hidden": "$50,295",
    "coseguro": "$50,783",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.10",
    "description": "TAC TORACICA",
    "price_hidden": "$59,295",
    "coseguro": "$59,870",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.11",
    "description": "TAC VEJIGA Y PROSTATA",
    "price_hidden": "$50,248",
    "coseguro": "$50,736",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.12",
    "description": "TAC DE OTROS ORGANOS O REGIONES",
    "price_hidden": "$50,248",
    "coseguro": "$50,736",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.10.13",
    "description": "TAC DE COLUMNA 1 REGI\u00d3N",
    "price_hidden": "$50,248",
    "coseguro": "$50,736",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.88",
    "description": "TAC CEREBRAL CON CONTRASTE",
    "price_hidden": "$50,248",
    "coseguro": "$50,736",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.89",
    "description": "TAC COMPLETA ABDOMEN CON CONTRASTE",
    "price_hidden": "$88,990",
    "coseguro": "$89,854",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.90",
    "description": "TAC DE COLUMNA 1 REGI\u00d3N CON CONTRASTE",
    "price_hidden": "$65,412",
    "coseguro": "$66,047",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.91",
    "description": "TAC DE OTROS ORGANOS O REGIONES CON CONTRASTE",
    "price_hidden": "$65,412",
    "coseguro": "$66,047",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.92",
    "description": "TAC GINECOLOGICA CON CONTRASTE",
    "price_hidden": "$66,702",
    "coseguro": "$67,349",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.93",
    "description": "",
    "price_hidden": "$56,991",
    "coseguro": "$57,544",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "TAC HEPATOBILIAR, ESPL\u00c9NICA, PANCRE\u00c1TICA, RENAL, SUPRARRENAL CON CONTRASTE $56,991 $57,544 $58,097"
  },
  {
    "code": "34.50.94",
    "description": "TAC MAMARIA CON CONTRASTE",
    "price_hidden": "$65,526",
    "coseguro": "$66,162",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "TAC MAMARIA CON CONTRASTE $65,526 $66,162 $66,799 34.50.95 TAC OFTALMOLOGICA CON CONTRASTE $42,487 $42,900 $43,312 34.50.96 TAC TIROIDEA CON CONTRASTE $65,412 $66,047 $66,682 34.50.97 TAC TORACICA CON CONTRASTE $65,412 $66,047 $66,682 34.50.98 TAC VEJIGA Y PROSTATA  CON CONTRASTE $65,412 $66,047 $66,682 34.90.01 PUNCI\u00d3N BIOPSIA PERCUT\u00c1NEA POR TAC  $237,177 $239,480 $241,783 34.50.15 ANGIOTOMOGRAFIA DE AORTA ABDOMINAL $166,328 $167,942 $169,557 34.50.17 ANGIOTOMOGRAFIA CRANEO Y VASOS DE CUELLO $239,920 $242,249 $244,578 34.50.22 ANGIOTOMOGRAFIA DE TORAX $138,937 $140,286 $141,634 34.50.23 ANGIOTOMOGRAFIA DE OTRAS REGIONES $65,788 $66,427 $67,066 34.90.02 BLOQUEO FASCETARIO RADICULAR BAJO TAC $154,627 $156,128 $157,629 34.20.01 RMN CEREBRAL $88,941 $89,805 $90,668 34.20.08 RMN COMPLETA DE ABDOMEN $75,831 $76,567 $77,303 34.20.09 RMN HEPATOBILIAR ESPL\u00c9NICO PANCRE\u00c1TICA $55,607 $56,147 $56,687 34.20.10 RMN TOR\u00c1CICA $74,365 $75,087 $75,809 34.20.11 RMN DE VEJIGA Y PR\u00d3STATA $55,607 $56,147 $56,687 34.20.13 RMN DE COLUMNA 1 REGI\u00d3N $73,596 $74,310 $75,025 34.20.14 RMN DE ARTICULACIONES $71,153 $71,844 $72,535 34.50.50 RMN SUPRARRENAL $52,283 $52,790 $53,298 34.50.51 RMN MAMARIA $55,607 $56,147 $56,687 34.50.52 RMN DE PELVIS $56,010 $56,553 $57,097 34.50.54 RMN OTRAS REGIONES $55,607 $56,147 $56,687 34.50.55 RMN CARDIACA FUNCIONAL $157,831 $159,364 $160,896 34.50.56 RMN DE PARTES BLANDAS (BRAZO - MUSLO) $55,607 $56,147 $56,687 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "34.50.95",
    "description": "TAC OFTALMOLOGICA CON CONTRASTE",
    "price_hidden": "$42,487",
    "coseguro": "$42,900",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.96",
    "description": "TAC TIROIDEA CON CONTRASTE",
    "price_hidden": "$65,412",
    "coseguro": "$66,047",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.97",
    "description": "TAC TORACICA CON CONTRASTE",
    "price_hidden": "$65,412",
    "coseguro": "$66,047",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.98",
    "description": "TAC VEJIGA Y PROSTATA CON CONTRASTE",
    "price_hidden": "$65,412",
    "coseguro": "$66,047",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.90.01",
    "description": "PUNCI\u00d3N BIOPSIA PERCUT\u00c1NEA POR TAC",
    "price_hidden": "$237,177",
    "coseguro": "$239,480",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.15",
    "description": "ANGIOTOMOGRAFIA DE AORTA ABDOMINAL",
    "price_hidden": "$166,328",
    "coseguro": "$167,942",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.17",
    "description": "ANGIOTOMOGRAFIA CRANEO Y VASOS DE CUELLO",
    "price_hidden": "$239,920",
    "coseguro": "$242,249",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.22",
    "description": "ANGIOTOMOGRAFIA DE TORAX",
    "price_hidden": "$138,937",
    "coseguro": "$140,286",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.23",
    "description": "ANGIOTOMOGRAFIA DE OTRAS REGIONES",
    "price_hidden": "$65,788",
    "coseguro": "$66,427",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.90.02",
    "description": "BLOQUEO FASCETARIO RADICULAR BAJO TAC",
    "price_hidden": "$154,627",
    "coseguro": "$156,128",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.01",
    "description": "RMN CEREBRAL",
    "price_hidden": "$88,941",
    "coseguro": "$89,805",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.08",
    "description": "RMN COMPLETA DE ABDOMEN",
    "price_hidden": "$75,831",
    "coseguro": "$76,567",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.09",
    "description": "RMN HEPATOBILIAR ESPL\u00c9NICO PANCRE\u00c1TICA",
    "price_hidden": "$55,607",
    "coseguro": "$56,147",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.10",
    "description": "RMN TOR\u00c1CICA",
    "price_hidden": "$74,365",
    "coseguro": "$75,087",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.11",
    "description": "RMN DE VEJIGA Y PR\u00d3STATA",
    "price_hidden": "$55,607",
    "coseguro": "$56,147",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.13",
    "description": "RMN DE COLUMNA 1 REGI\u00d3N",
    "price_hidden": "$73,596",
    "coseguro": "$74,310",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.20.14",
    "description": "RMN DE ARTICULACIONES",
    "price_hidden": "$71,153",
    "coseguro": "$71,844",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.50",
    "description": "RMN SUPRARRENAL",
    "price_hidden": "$52,283",
    "coseguro": "$52,790",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.51",
    "description": "RMN MAMARIA",
    "price_hidden": "$55,607",
    "coseguro": "$56,147",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.52",
    "description": "RMN DE PELVIS",
    "price_hidden": "$56,010",
    "coseguro": "$56,553",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.54",
    "description": "RMN OTRAS REGIONES",
    "price_hidden": "$55,607",
    "coseguro": "$56,147",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.55",
    "description": "RMN CARDIACA FUNCIONAL",
    "price_hidden": "$157,831",
    "coseguro": "$159,364",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.56",
    "description": "RMN DE PARTES BLANDAS (BRAZO - MUSLO)",
    "price_hidden": "$55,607",
    "coseguro": "$56,147",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.57",
    "description": "RMN RENAL",
    "price_hidden": "$52,283",
    "coseguro": "$52,790",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "RMN RENAL $52,283 $52,790 $53,298 34.50.62 RMN GINECOL\u00d3GICA $52,283 $52,790 $53,298 34.50.63 RMN OIDO $55,607 $56,147 $56,687 34.50.64 RMN OFTALMOL\u00d3GICA $52,283 $52,790 $53,298 34.50.65 RMN DE COLUMNA 2 REGIONES $117,764 $118,907 $120,051 34.50.66 RMN DE COLUMNA 3 REGIONES $165,605 $167,213 $168,821 34.50.70 RMN CEREBRAL CON CONTRASTE $94,654 $95,573 $96,492 34.50.71 RMN COMPLETA DE ABDOMEN CON CONTRASTE $96,109 $97,042 $97,975 34.50.72 RMN DE ARTICULACIONES CON CONTRASTE $77,156 $77,905 $78,654 34.50.73 RMN DE COLUMNA 1 REGI\u00d3N CON CONTRASTE $93,890 $94,802 $95,714 34.50.74 RMN DE COLUMNA 2 REGIONES CON CONTRASTE $137,815 $139,153 $140,491 34.50.75 RMN DE COLUMNA 3 REGIONES CON CONTRASTE $185,396 $187,196 $188,996 34.50.76 RMN DE PARTES BLANDAS (BRAZO - MUSLO) CON CONTRASTE $75,999 $76,737 $77,475 34.50.77 RMN DE PELVIS CON CONTRASTE $76,398 $77,140 $77,881 34.50.78 RMN DE VEJIGA Y PR\u00d3STATA CON CONTRASTE $75,999 $76,737 $77,475 34.50.79 RMN GINECOL\u00d3GICA CON CONTRASTE $72,692 $73,397 $74,103 34.50.80 RMN HEPATOBILIAR ESPL\u00c9NICO PANCRE\u00c1TICA CON CONTRASTE $75,999 $76,737 $77,475 34.50.81 RMN MAMARIA CON CONTRASTE $75,999 $76,737 $77,475 34.50.82 RMN OFTALMOL\u00d3GICA CON CONTRASTE $72,692 $73,397 $74,103 34.50.83 RMN OIDO CON CONTRASTE $75,999 $76,737 $77,475 34.50.84 RMN OTRAS REGIONES CON CONTRASTE $75,999 $76,737 $77,475 34.50.85 RMN RENAL CON CONTRASTE $72,692 $73,397 $74,103 34.50.86 RMN SUPRARRENAL CON CONTRASTE $72,692 $73,397 $74,103 34.50.87 RMN TOR\u00c1CICA CON CONTRASTE $94,654 $95,573 $96,492 34.51.23 RMN CARDIACA FUNCIONAL CON CONTRASTE $178,349 $180,081 $181,812 34.50.58 ARTRORESONANCIA $74,180 $74,900 $75,620 34.50.59 COLANGIORESONANCIA $85,976 $86,811 $87,646 34.50.60 URORESONANCIA $83,859 $84,673 $85,488 34.50.61 ANGIORESONANCIA $106,730 $107,766 $108,802 34.12.01 DENSITOMETR\u00cdA \u00d3SEA                       $28,306 $28,581 $28,856 34.50.20 TOMOGRAFIA POR EMISION DE POSITRONES - SANTA FE $291,598 $294,429 $297,260 34.51.01 RMI DE ABDOMEN CON DIFUSI\u00d3N $76,027 $76,766 $77,504 34.51.02 RMI DE PELVIS CON DIFUSI\u00d3N $61,680 $62,279 $62,878 34.51.03 RMN DE PELVIS DIN\u00c1MICA $76,743 $77,488 $78,233 34.51.04 ENTEROGRAFIA POR RMN $72,873 $73,581 $74,288 34.51.05 RMN MULTIPARAM\u00c9TRICA DE PR\u00d3STATA $226,600 $228,800 $231,000 34.51.06 RMN DE CR\u00c1NEO CON DIFUSI\u00d3N $74,968 $75,696 $76,424 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "34.50.62",
    "description": "RMN GINECOL\u00d3GICA",
    "price_hidden": "$52,283",
    "coseguro": "$52,790",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.63",
    "description": "RMN OIDO",
    "price_hidden": "$55,607",
    "coseguro": "$56,147",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.64",
    "description": "RMN OFTALMOL\u00d3GICA",
    "price_hidden": "$52,283",
    "coseguro": "$52,790",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.65",
    "description": "RMN DE COLUMNA 2 REGIONES",
    "price_hidden": "$117,764",
    "coseguro": "$118,907",
    "bonos": "23",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.66",
    "description": "RMN DE COLUMNA 3 REGIONES",
    "price_hidden": "$165,605",
    "coseguro": "$167,213",
    "bonos": "32",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.70",
    "description": "RMN CEREBRAL CON CONTRASTE",
    "price_hidden": "$94,654",
    "coseguro": "$95,573",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.71",
    "description": "RMN COMPLETA DE ABDOMEN CON CONTRASTE",
    "price_hidden": "$96,109",
    "coseguro": "$97,042",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.72",
    "description": "RMN DE ARTICULACIONES CON CONTRASTE",
    "price_hidden": "$77,156",
    "coseguro": "$77,905",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.73",
    "description": "RMN DE COLUMNA 1 REGI\u00d3N CON CONTRASTE",
    "price_hidden": "$93,890",
    "coseguro": "$94,802",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.74",
    "description": "RMN DE COLUMNA 2 REGIONES CON CONTRASTE",
    "price_hidden": "$137,815",
    "coseguro": "$139,153",
    "bonos": "27",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.75",
    "description": "RMN DE COLUMNA 3 REGIONES CON CONTRASTE",
    "price_hidden": "$185,396",
    "coseguro": "$187,196",
    "bonos": "36",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.76",
    "description": "RMN DE PARTES BLANDAS (BRAZO - MUSLO) CON CONTRASTE",
    "price_hidden": "$75,999",
    "coseguro": "$76,737",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.77",
    "description": "RMN DE PELVIS CON CONTRASTE",
    "price_hidden": "$76,398",
    "coseguro": "$77,140",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.78",
    "description": "RMN DE VEJIGA Y PR\u00d3STATA CON CONTRASTE",
    "price_hidden": "$75,999",
    "coseguro": "$76,737",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.79",
    "description": "RMN GINECOL\u00d3GICA CON CONTRASTE",
    "price_hidden": "$72,692",
    "coseguro": "$73,397",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.80",
    "description": "RMN HEPATOBILIAR ESPL\u00c9NICO PANCRE\u00c1TICA CON CONTRASTE",
    "price_hidden": "$75,999",
    "coseguro": "$76,737",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.81",
    "description": "RMN MAMARIA CON CONTRASTE",
    "price_hidden": "$75,999",
    "coseguro": "$76,737",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.82",
    "description": "RMN OFTALMOL\u00d3GICA CON CONTRASTE",
    "price_hidden": "$72,692",
    "coseguro": "$73,397",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.83",
    "description": "RMN OIDO CON CONTRASTE",
    "price_hidden": "$75,999",
    "coseguro": "$76,737",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.84",
    "description": "RMN OTRAS REGIONES CON CONTRASTE",
    "price_hidden": "$75,999",
    "coseguro": "$76,737",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.85",
    "description": "RMN RENAL CON CONTRASTE",
    "price_hidden": "$72,692",
    "coseguro": "$73,397",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.86",
    "description": "RMN SUPRARRENAL CON CONTRASTE",
    "price_hidden": "$72,692",
    "coseguro": "$73,397",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.87",
    "description": "RMN TOR\u00c1CICA CON CONTRASTE",
    "price_hidden": "$94,654",
    "coseguro": "$95,573",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.23",
    "description": "RMN CARDIACA FUNCIONAL CON CONTRASTE",
    "price_hidden": "$178,349",
    "coseguro": "$180,081",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.58",
    "description": "ARTRORESONANCIA",
    "price_hidden": "$74,180",
    "coseguro": "$74,900",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.59",
    "description": "COLANGIORESONANCIA",
    "price_hidden": "$85,976",
    "coseguro": "$86,811",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.60",
    "description": "URORESONANCIA",
    "price_hidden": "$83,859",
    "coseguro": "$84,673",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.61",
    "description": "ANGIORESONANCIA",
    "price_hidden": "$106,730",
    "coseguro": "$107,766",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.12.01",
    "description": "DENSITOMETR\u00cdA \u00d3SEA",
    "price_hidden": "$28,306",
    "coseguro": "$28,581",
    "bonos": "9",
    "source": "MEDICAS"
  },
  {
    "code": "34.50.20",
    "description": "TOMOGRAFIA POR EMISION DE POSITRONES - SANTA FE",
    "price_hidden": "$291,598",
    "coseguro": "$294,429",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.01",
    "description": "RMI DE ABDOMEN CON DIFUSI\u00d3N",
    "price_hidden": "$76,027",
    "coseguro": "$76,766",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.02",
    "description": "RMI DE PELVIS CON DIFUSI\u00d3N",
    "price_hidden": "$61,680",
    "coseguro": "$62,279",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.03",
    "description": "RMN DE PELVIS DIN\u00c1MICA",
    "price_hidden": "$76,743",
    "coseguro": "$77,488",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.04",
    "description": "ENTEROGRAFIA POR RMN",
    "price_hidden": "$72,873",
    "coseguro": "$73,581",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.05",
    "description": "RMN MULTIPARAM\u00c9TRICA DE PR\u00d3STATA",
    "price_hidden": "$226,600",
    "coseguro": "$228,800",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.06",
    "description": "RMN DE CR\u00c1NEO CON DIFUSI\u00d3N",
    "price_hidden": "$74,968",
    "coseguro": "$75,696",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.07",
    "description": "RMN DE CR\u00c1NEO CON PERFUSI\u00d3N",
    "price_hidden": "$74,968",
    "coseguro": "$75,696",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "RMN DE CR\u00c1NEO CON PERFUSI\u00d3N $74,968 $75,696 $76,424 34.51.08 RMN DE CR\u00c1NEO CON ESPECTROSCOPIA $74,968 $75,696 $76,424 34.51.09 RMN DE CR\u00c1NEO CON TRACTOGRAFIA $74,968 $75,696 $76,424 34.51.10 RMN DE CR\u00c1NEO CON EVALUACI\u00d3N MOTORA Y LENGUAJE $74,968 $75,696 $76,424 34.51.11 RMN DE CR\u00c1NEO CON DOS O M\u00c1S DE DOS T\u00c9CNICAS ESPECIALES $96,092 $97,025 $97,958 34.51.12 MIELO TAC $46,836 $47,290 $47,745 34.51.13 COLONOGRAF\u00cdA POR TAC MULTISLICE (COLONOSCOPIA VIRTUAL) $190,096 $191,942 $193,787 34.51.14 TAC DE COLUMNA 2 REGIONES $87,310 $88,158 $89,006 34.51.15 TAC DE COLUMNA 3 REGIONES $109,140 $110,200 $111,259 34.51.16 TAC DE COLUMNA CON CONTRASTE 2 REGIONES $91,745 $92,635 $93,526 34.51.17 TAC DE COLUMNA CON CONTRASTE 3 REGIONES $114,679 $115,793 $116,906 34.51.18 TAC OSTEOARTICULAR CON RECONSTRUCCI\u00d3N 3D $67,611 $68,267 $68,924 34.51.19 ANGIO TAC CORONARIA (CORONARIOGRAF\u00cdA NO INVASIVA) $165,831 $167,441 $169,051 34.51.20 UROGRAFIA POR TAC $67,611 $68,267 $68,924 34.51.21 MODULO TECNICAS ESPECIALES EN IMAGENES $17,642 $17,813 $17,984 34.51.22 RMN DE ENC\u00c9FALO CON DINAMICA DE LCR $112,658 $113,752 $114,846 20 20 20 20 20 20 37 20 20 20 20 20 32 20 20 20 35. TERAPIA RADIANTE"
  },
  {
    "code": "34.51.08",
    "description": "RMN DE CR\u00c1NEO CON ESPECTROSCOPIA",
    "price_hidden": "$74,968",
    "coseguro": "$75,696",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.09",
    "description": "RMN DE CR\u00c1NEO CON TRACTOGRAFIA",
    "price_hidden": "$74,968",
    "coseguro": "$75,696",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.10",
    "description": "RMN DE CR\u00c1NEO CON EVALUACI\u00d3N MOTORA Y LENGUAJE",
    "price_hidden": "$74,968",
    "coseguro": "$75,696",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.11",
    "description": "RMN DE CR\u00c1NEO CON DOS O M\u00c1S DE DOS T\u00c9CNICAS ESPECIALES",
    "price_hidden": "$96,092",
    "coseguro": "$97,025",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.12",
    "description": "MIELO TAC",
    "price_hidden": "$46,836",
    "coseguro": "$47,290",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.13",
    "description": "COLONOGRAF\u00cdA POR TAC MULTISLICE (COLONOSCOPIA VIRTUAL)",
    "price_hidden": "$190,096",
    "coseguro": "$191,942",
    "bonos": "37",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.14",
    "description": "TAC DE COLUMNA 2 REGIONES",
    "price_hidden": "$87,310",
    "coseguro": "$88,158",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.15",
    "description": "TAC DE COLUMNA 3 REGIONES",
    "price_hidden": "$109,140",
    "coseguro": "$110,200",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.16",
    "description": "TAC DE COLUMNA CON CONTRASTE 2 REGIONES",
    "price_hidden": "$91,745",
    "coseguro": "$92,635",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.17",
    "description": "TAC DE COLUMNA CON CONTRASTE 3 REGIONES",
    "price_hidden": "$114,679",
    "coseguro": "$115,793",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.18",
    "description": "TAC OSTEOARTICULAR CON RECONSTRUCCI\u00d3N 3D",
    "price_hidden": "$67,611",
    "coseguro": "$68,267",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.19",
    "description": "ANGIO TAC CORONARIA (CORONARIOGRAF\u00cdA NO INVASIVA)",
    "price_hidden": "$165,831",
    "coseguro": "$167,441",
    "bonos": "32",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.20",
    "description": "UROGRAFIA POR TAC",
    "price_hidden": "$67,611",
    "coseguro": "$68,267",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.21",
    "description": "MODULO TECNICAS ESPECIALES EN IMAGENES",
    "price_hidden": "$17,642",
    "coseguro": "$17,813",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "34.51.22",
    "description": "RMN DE ENC\u00c9FALO CON DINAMICA DE LCR",
    "price_hidden": "$112,658",
    "coseguro": "$113,752",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "35.01.02",
    "description": "TELECOBALTOTERAPIA POR SESI\u00d3N",
    "price_hidden": "$2,621",
    "coseguro": "$2,646",
    "bonos": "2",
    "source": "MEDICAS",
    "normativa": "TELECOBALTOTERAPIA POR SESI\u00d3N $2,621 $2,646 $2,671 2 36. UROLOGIA"
  },
  {
    "code": "36.01.02",
    "description": "URETROCISTOFIBROSCOP\u00cdA",
    "price_hidden": "$35,808",
    "coseguro": "$36,156",
    "bonos": "19",
    "source": "MEDICAS",
    "normativa": "URETROCISTOFIBROSCOP\u00cdA $35,808 $36,156 $36,503 36.01.08 URETROCISTOURETEROFIBROSCOP\u00cdA CON VIDEO $44,578 $45,011 $45,444 36.01.11 ESTUDIO URODIN\u00c1MICO COMPLETO $47,186 $47,644 $48,102 36.50.01 FLUJOMETR\u00cdA URINARIA $15,396 $15,545 $15,695 36.90.01 COLOCACI\u00d3N O EXTRACCI\u00d3N DE CATETER DOBLE J $73,147 $73,857 $74,567 36.90.02 NEFROLITOTRICIA PERCUT\u00c1NEA POR VIDEO $750,789 $758,078 $765,367 36.90.03 URETRORENOSCOP\u00cdA INFERIOR $202,926 $204,896 $206,866 36.90.04 URETRORENOSCOP\u00cdA MEDIA   $258,964 $261,478 $263,992 36.90.05 URETRORENOSCOP\u00cdA SUPERIOR   $331,242 $334,458 $337,674 36.90.06 URETEROLITOTRICIA ENDOSC\u00d3PICA $547,426 $552,741 $558,056 OI OI BQ BQ 38. PRESTACIONES VARIAS"
  },
  {
    "code": "36.01.08",
    "description": "URETROCISTOURETEROFIBROSCOP\u00cdA CON VIDEO",
    "price_hidden": "$44,578",
    "coseguro": "$45,011",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "36.01.11",
    "description": "ESTUDIO URODIN\u00c1MICO COMPLETO",
    "price_hidden": "$47,186",
    "coseguro": "$47,644",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "36.50.01",
    "description": "FLUJOMETR\u00cdA URINARIA",
    "price_hidden": "$15,396",
    "coseguro": "$15,545",
    "bonos": "14",
    "source": "MEDICAS"
  },
  {
    "code": "36.90.01",
    "description": "COLOCACI\u00d3N O EXTRACCI\u00d3N DE CATETER DOBLE J",
    "price_hidden": "$73,147",
    "coseguro": "$73,857",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "36.90.02",
    "description": "NEFROLITOTRICIA PERCUT\u00c1NEA POR VIDEO",
    "price_hidden": "$750,789",
    "coseguro": "$758,078",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "36.90.03",
    "description": "URETRORENOSCOP\u00cdA INFERIOR",
    "price_hidden": "$202,926",
    "coseguro": "$204,896",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "36.90.04",
    "description": "URETRORENOSCOP\u00cdA MEDIA",
    "price_hidden": "$258,964",
    "coseguro": "$261,478",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "36.90.05",
    "description": "URETRORENOSCOP\u00cdA SUPERIOR",
    "price_hidden": "$331,242",
    "coseguro": "$334,458",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "36.90.06",
    "description": "URETEROLITOTRICIA ENDOSC\u00d3PICA",
    "price_hidden": "$547,426",
    "coseguro": "$552,741",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "38.01.01",
    "description": "PUVA",
    "price_hidden": "$17,002",
    "coseguro": "$17,168",
    "bonos": "12",
    "source": "MEDICAS",
    "normativa": "PUVA $17,002 $17,168 $17,333 38.02.01 CAMARA HIPERB\u00c1RICA $21,751 $21,962 $22,173 38.50.03 USO DE MICROSCOPIO $51,787 $52,290 $52,792"
  },
  {
    "code": "38.02.01",
    "description": "CAMARA HIPERB\u00c1RICA",
    "price_hidden": "$21,751",
    "coseguro": "$21,962",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "38.50.03",
    "description": "USO DE MICROSCOPIO",
    "price_hidden": "$51,787",
    "coseguro": "$52,290",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "38.50.04",
    "description": "",
    "price_hidden": "$978,500",
    "coseguro": "$988,000",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "USO MONITOREO MEDULAR/TRONCO ENCEF\u00c1LICO NEUROFISIOL\u00d3GICO (EN CASO DE TUMORES TRONCO, RAQUIMEDULARES Y ESCOLIOSIS DEFORMANTE SEVERA) $978,500 $988,000 $997,500"
  },
  {
    "code": "38.50.05",
    "description": "USO CRANE\u00d3TOMO",
    "price_hidden": "$460,293",
    "coseguro": "$464,761",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "USO CRANE\u00d3TOMO $460,293 $464,761 $469,230 38.50.06 USO CAVITADOR ULTRAS\u00d3NICO $843,870 $852,063 $860,256 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "38.50.06",
    "description": "USO CAVITADOR ULTRAS\u00d3NICO",
    "price_hidden": "$843,870",
    "coseguro": "$852,063",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "38.50.07",
    "description": "USO NEURONAVEGADOR",
    "price_hidden": "$2,301,463",
    "coseguro": "$2,323,807",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "USO NEURONAVEGADOR $2,301,463 $2,323,807 $2,346,152 38.90.01 QUIMIOTERAPIA AMBULATORIA  $92,059 $92,952 $93,846 38.90.02 QUIMIOTERAPIA EN INTERNACI\u00d3N $56,470 $57,018 $57,567 38.90.03 PUNCI\u00d3N LUMBAR CON QUIMIOTERAPIA INTRATECAL $165,627 $167,236 $168,844 38.90.07 PUNCI\u00d3N LUMBAR DIAGN\u00d3STICA $66,296 $66,939 $67,583 04.99.01 DENTASCAN POR TCV MULTISLICE UN MAXILAR $63,177 $63,790 $64,404 04.99.02 DENTASCAN POR TCV MULTISLICE AMBOS MAXILARES $79,157 $79,926 $80,694 20 OI OI 20 20 20 43. PRESTACIONES SANATORIALES Y DE ENFERMARIA"
  },
  {
    "code": "38.90.01",
    "description": "QUIMIOTERAPIA AMBULATORIA",
    "price_hidden": "$92,059",
    "coseguro": "$92,952",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.02",
    "description": "QUIMIOTERAPIA EN INTERNACI\u00d3N",
    "price_hidden": "$56,470",
    "coseguro": "$57,018",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.03",
    "description": "PUNCI\u00d3N LUMBAR CON QUIMIOTERAPIA INTRATECAL",
    "price_hidden": "$165,627",
    "coseguro": "$167,236",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.07",
    "description": "PUNCI\u00d3N LUMBAR DIAGN\u00d3STICA",
    "price_hidden": "$66,296",
    "coseguro": "$66,939",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "04.99.01",
    "description": "DENTASCAN POR TCV MULTISLICE UN MAXILAR",
    "price_hidden": "$63,177",
    "coseguro": "$63,790",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "04.99.02",
    "description": "DENTASCAN POR TCV MULTISLICE AMBOS MAXILARES",
    "price_hidden": "$79,157",
    "coseguro": "$79,926",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "43.50.01",
    "description": "SALA DE RECUPERACI\u00d3N",
    "price_hidden": "$17,865",
    "coseguro": "$18,039",
    "bonos": "8",
    "source": "MEDICAS",
    "normativa": "SALA DE RECUPERACI\u00d3N $17,865 $18,039 $18,212 TRATAMIENTOS NEUROVASCULARES OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "01.90.09",
    "description": "MODULO DE TROMBOLISIS PARA ACV ISQUEMICO",
    "price_hidden": "$168,300",
    "coseguro": "$169,934",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "MODULO DE TROMBOLISIS PARA ACV ISQUEMICO $168,300 $169,934 $171,568 01.90.10 MODULO DE TROMBECTOMIA MECANICA PARA ACV ISQUEMICO $11,702,848 $11,816,468 $11,930,088 01.90.03 TRATAMIENTO ENDOVASCULAR DE ANEURISMAS CEREBRALES $8,575,866 $8,659,127 $8,742,387"
  },
  {
    "code": "01.90.10",
    "description": "MODULO DE TROMBECTOMIA MECANICA PARA ACV ISQUEMICO $11,702,848",
    "price_hidden": "",
    "coseguro": "$11,816,468",
    "bonos": "BPE",
    "source": "MEDICAS"
  },
  {
    "code": "01.90.03",
    "description": "TRATAMIENTO ENDOVASCULAR DE ANEURISMAS CEREBRALES",
    "price_hidden": "$8,575,866",
    "coseguro": "$8,659,127",
    "bonos": "BPE",
    "source": "MEDICAS"
  },
  {
    "code": "01.90.08",
    "description": "",
    "price_hidden": "$9,672,645",
    "coseguro": "$9,766,554",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "TRATAMIENTO ENDOVASCULAR DE MALFORMACIONES VASCULARES CEREBRALES (por sesi\u00f3n) $9,672,645 $9,766,554 $9,860,463 M\u00d3DULOS ABLACI\u00d3N DE ARRITMIAS CARDIACAS (AAC) OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "17.90.04",
    "description": "MODULO ABLACION DE ARRITMIAS CARDIACAS - GRUPO 1",
    "price_hidden": "$1,150,432",
    "coseguro": "$1,161,601",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "MODULO ABLACION DE ARRITMIAS CARDIACAS - GRUPO 1 $1,150,432 $1,161,601 $1,172,770 17.90.05 MODULO ABLACION DE ARRITMIAS CARDIACAS - GRUPO 2 $1,361,768 $1,374,989 $1,388,210 17.90.06 MODULO ABLACION DE ARRITMIAS CARDIACAS - GRUPO 3 $1,921,854 $1,940,513 $1,959,171 HONORARIOS CIRUGICAS VASCULARES Y TOR\u00c1CICAS OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "17.90.05",
    "description": "MODULO ABLACION DE ARRITMIAS CARDIACAS - GRUPO 2",
    "price_hidden": "$1,361,768",
    "coseguro": "$1,374,989",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "17.90.06",
    "description": "MODULO ABLACION DE ARRITMIAS CARDIACAS - GRUPO 3",
    "price_hidden": "$1,921,854",
    "coseguro": "$1,940,513",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "05.90.01",
    "description": "",
    "price_hidden": "$468,797",
    "coseguro": "$473,348",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "TORACOTOMIA EXPLORADORA,  RESECCION DE PLEURA PARIETAL, COSTILLAS, MUSCULOS INTERCOSTALES ( COMO UNICA OPERACI\u00d3N ) $468,797 $473,348 $477,899 OPERACIONES PLASTICAS POR TORAX EN CARINA O EXCAVADO (TORACOPLASTIA COMO TRATAMIENTO DE CAVIDADES PLEURALES RESIDUALES, CON O SIN FISTULA BRONQUIAL, COMO OPERACI\u00d3N COMPLEMENTARIA O NO DE INTERVENCIONES ANTERIORES)"
  },
  {
    "code": "05.90.02",
    "description": "",
    "price_hidden": "$490,357",
    "coseguro": "$495,118",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "RESECCION AMPLIA DE PARED TORACICA CON REEMPLAZO PROTESICO ACOMPA\u00d1ADA O NO DE COLGAJOS (NO INCLUYE HONORARIOS DE EQUIPO DE CIRUG\u00cdA PL\u00c1STICA)"
  },
  {
    "code": "05.90.03",
    "description": "ACOMPA\u00d1ADA O NO DE COLGAJOS (NO INCLUYE HONORARIOS DE EQUIPO DE",
    "price_hidden": "$518,074",
    "coseguro": "$523,103",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": ""
  },
  {
    "code": "05.90.04",
    "description": "TRAQUEOSTOMIA POR CUALQUIER VIA",
    "price_hidden": "$153,587",
    "coseguro": "$155,079",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "TRAQUEOSTOMIA POR CUALQUIER VIA $153,587 $155,079 $156,570"
  },
  {
    "code": "05.90.05",
    "description": "",
    "price_hidden": "$485,078",
    "coseguro": "$489,788",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "RESECCION PULMONAR PARCIAL O TOTAL, DECORTICACION PULMONAR POR TORACOTOMIA $485,078 $489,788 $494,497 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "05.90.06",
    "description": "",
    "price_hidden": "$476,152",
    "coseguro": "$480,775",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "METASTASECTOMIA, RESECCIONES PULMONARES ATIPICAS. CIRUGIA RESECTIVA EN EL NEUMOTORAX POR BULLAS POR VIA CONVENCIONAL $476,152 $480,775 $485,397 OPERACI\u00d3N DEL MEDIASTINO CON RESECCION, OPERACIONES EN EL MEDIASTINO (VIA TORACICO O TRASESTERNAL ) TUMORES, ABSCESOS, DRENAJES, CUERPOS EXTRA\u00d1OS, TIMO, ETC"
  },
  {
    "code": "05.90.07",
    "description": "(VIA TORACICO O TRASESTERNAL ) TUMORES, ABSCESOS, DRENAJES, CUERPOS",
    "price_hidden": "$476,152",
    "coseguro": "$480,775",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": ""
  },
  {
    "code": "05.90.08",
    "description": "",
    "price_hidden": "$355,685",
    "coseguro": "$359,138",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "TORACOTOMIA AMPLIA EXPLORADORA PARA BIOPSIA DE PULMON, PLEURA O MEDIASTINO $355,685 $359,138 $362,591"
  },
  {
    "code": "05.90.09",
    "description": "",
    "price_hidden": "$82,996",
    "coseguro": "$83,802",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "DRENAJE DEL TORAX/BIOPSIA PLEURA ANESTESIA LOCAL,  DRENAJE DE PLEURA CON TROCARD, POR TORACOTOMIA MINIMA (CON SEGUIMIENTO DE PACIENTE) $82,996 $83,802 $84,608"
  },
  {
    "code": "08.90.06",
    "description": "",
    "price_hidden": "$485,310",
    "coseguro": "$490,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "ESOFAGECTOMIA TOTAL, SIN RECONSTRUCCION DEL TRANSITO (INCLUYE OSTOMIAS) $485,310 $490,021 $494,733"
  },
  {
    "code": "08.90.07",
    "description": "ESOFAGUECTOMIA EN TRES TIEMPOS POR EL MISMO GRUPO QUIRURGICO",
    "price_hidden": "$923,148",
    "coseguro": "$932,111",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "ESOFAGUECTOMIA EN TRES TIEMPOS POR EL MISMO GRUPO QUIRURGICO $923,148 $932,111 $941,073"
  },
  {
    "code": "07.90.23",
    "description": "CIRUGIA ANEURISMA AORTA TORACICO ABDOMINAL",
    "price_hidden": "$923,148",
    "coseguro": "$932,111",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "CIRUGIA ANEURISMA AORTA TORACICO ABDOMINAL $923,148 $932,111 $941,073"
  },
  {
    "code": "07.90.24",
    "description": "",
    "price_hidden": "$239,533",
    "coseguro": "$241,858",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "VARICES UNILATERAL: SAFENECTOMIA INTERNA Y/O EXTERNA DE MIEMBRO INFERIOR CON LIGADURA  Y/O RESECCIONES ESCALONADAS, UNILATERAL $239,533 $241,858 $244,184"
  },
  {
    "code": "07.90.25",
    "description": "",
    "price_hidden": "$356,969",
    "coseguro": "$360,434",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "VARICES BILATERAL, SAFENECTOMIA INTERNA Y/O EXTERNA DE MIEMBRO INFERIOR CON LIGADURA Y/O RESECCIONES ESCALONADAS BILATERAL $356,969 $360,434 $363,900 CIRUGIA DE LA ARTERIA CAROTIDA O DE LA VERTEBRAL: TROMBOENDARTERECTOMIA; EMBOLECTOMIA; ANASTOMOSIS; INJERTOS (TROMBOSIS, EMBOLIAS, ANEURISMAS, FISTULA ARTERIOVENOSA)  INCLUYE EVENTUAL TOMA DE VENA PARA PLASTICA O INJERTO."
  },
  {
    "code": "07.90.26",
    "description": "",
    "price_hidden": "$627,979",
    "coseguro": "$634,076",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": ""
  },
  {
    "code": "07.90.27",
    "description": "EMBOLECTOMIA EN ARTERIAS PERIF\u00c9RICAS",
    "price_hidden": "$324,887",
    "coseguro": "$328,041",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "EMBOLECTOMIA EN ARTERIAS PERIF\u00c9RICAS $324,887 $328,041 $331,195"
  },
  {
    "code": "07.90.28",
    "description": "",
    "price_hidden": "$635,326",
    "coseguro": "$641,495",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "DERIVACION (BY PASS) DE VASOS PERIFERICOS CON INJERTO VENOSO. INCLUYE TOMA DEL INJERTO. $635,326 $641,495 $647,663"
  },
  {
    "code": "07.90.29",
    "description": "",
    "price_hidden": "$479,062",
    "coseguro": "$483,713",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "DERIVACION (BY PASS) DE VASOS  PERIFERICOS CON INJERTO SINTETICO FEMORO FEMORAL , FEMORO POPLITEO,  AXILO HUMERAL, AXILO BIFEMORAL. $479,062 $483,713 $488,364"
  },
  {
    "code": "07.90.30",
    "description": "",
    "price_hidden": "$239,230",
    "coseguro": "$241,552",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "IMPLANTE DE DISPOSITIVO CARDIACO ELECTRICO UNI-CAMERAL ENDOCAVITARIO (MARCAPASOS-CDI) $239,230 $241,552 $243,875"
  },
  {
    "code": "07.90.31",
    "description": "",
    "price_hidden": "$354,917",
    "coseguro": "$358,363",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "IMPLANTE DE DISPOSITIVO CARDIACO ELECTRICO BI-CAMERAL ENDOCAVITARIO (MARCAPASOS-CDI) $354,917 $358,363 $361,808"
  },
  {
    "code": "07.90.32",
    "description": "",
    "price_hidden": "$610,684",
    "coseguro": "$616,613",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "IMPLANTE DE DISPOSITIVO CARDIACO ELECTRICO TRI-CAMERAL ENDOCAVITARIO (RESINCRONIZADOR CON/SIN CDI) $610,684 $616,613 $622,542"
  },
  {
    "code": "07.90.33",
    "description": "IMPLANTE DE DISPOSITIVO CARDIACO ELECTRICO EPICARDICO (MCP-CDI-RSC)",
    "price_hidden": "$447,370",
    "coseguro": "$451,714",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "IMPLANTE DE DISPOSITIVO CARDIACO ELECTRICO EPICARDICO (MCP-CDI-RSC) $447,370 $451,714 $456,057"
  },
  {
    "code": "07.90.34",
    "description": "",
    "price_hidden": "$237,874",
    "coseguro": "$240,184",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "RECAMBIO/RECOLOCACION DE GENERADOR DE DISPOSITIVO CARDIACO ELECTRICO (MCP-CDI-RESINCRO) $237,874 $240,184 $242,493"
  },
  {
    "code": "07.90.35",
    "description": "RECAMBIO/REIMPLANTE DE ELECTRODOS ENDOCAVITARIO UNI-CAMERAL (MCP-CDI)",
    "price_hidden": "$239,230",
    "coseguro": "$241,552",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "RECAMBIO/REIMPLANTE DE ELECTRODOS ENDOCAVITARIO UNI-CAMERAL (MCP-CDI) $239,230 $241,552 $243,875"
  },
  {
    "code": "07.90.36",
    "description": "",
    "price_hidden": "$346,216",
    "coseguro": "$349,577",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "RECAMBIO DE ELECTRODOS ENDOCAVITARIO BI o TRI-CAMERAL (MCP-CDI-RESINCRO) $346,216 $349,577 $352,939 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "07.90.37",
    "description": "",
    "price_hidden": "$110,178",
    "coseguro": "$111,247",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "FLEBOTOMIA CON COLOCACI\u00d3N DE CAT\u00c9TER DISECCI\u00d3N DE VENAS PARA PERFUSI\u00d3N (CANALIZACI\u00d3N VENOSA CON CATETER) $110,178 $111,247 $112,317"
  },
  {
    "code": "07.90.38",
    "description": "",
    "price_hidden": "$203,747",
    "coseguro": "$205,725",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "COLOCACI\u00d3N/ ABLACI\u00d3N DE CAT\u00c9TERES VENOSOS CENTRALES IMPLANTABLES O SEMIMPLANTABLES $203,747 $205,725 $207,703"
  },
  {
    "code": "07.90.39",
    "description": "",
    "price_hidden": "$543,325",
    "coseguro": "$548,600",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "DERIVACI\u00d3N AORTO O IL\u00cdACOFEMORAL UNI/BILATERAL (CON O SIN SIMPATICECTOM\u00cdA) $543,325 $548,600 $553,875"
  },
  {
    "code": "07.90.40",
    "description": "",
    "price_hidden": "$407,494",
    "coseguro": "$411,450",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "TROMBOENDARTERECTOM\u00cdA DE VASOS PERIF\u00c9RICOS CON O SIN ARTERIOPLASTIA (INCLUYE TOMA DE EVENTUAL INJERTO VENOSO) $407,494 $411,450 $415,406"
  },
  {
    "code": "07.90.41",
    "description": "",
    "price_hidden": "$679,157",
    "coseguro": "$685,750",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "TRATAMIENTO QUIRURGICO POR CUALQUIER VIA DEL ANEURISMA DE AORTA ABDOMINAL (NO COMPLICADO) $679,157 $685,750 $692,344 TRATAMIENTO QUIRURGICO DEL ANEURISMA DE AORTA ABDOMINAL COMPLICADO(INCLUYE AAA YUXTARRENALES, PSEUDOANEURISMAS, INFECCI\u00d3N DE PR\u00d3TESIS VASCULARES ABDOMINALES, TRAUMATISMOS, INVASI\u00d3N TUMORAL DE VASOS ABDOMINALES)"
  },
  {
    "code": "07.90.42",
    "description": "",
    "price_hidden": "$769,711",
    "coseguro": "$777,184",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "EXUAL INTEGRAL  Y REPRODUCTIVA PROGRAMA DE FORTALECIMIENTO DEL DERECHO A LA INTERRUPCI\u00d3N DEL EMBARAZO OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "EXUAL INTEGRAL",
    "description": "Y REPRODUCTIVA",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "PROGRAMA",
    "description": "DE ATENCI\u00d3N A PERSONAS CON DEPENDENCIA O SEMIDEPENDENCIA (DEADOS)",
    "price_hidden": "OCT/25",
    "coseguro": "NOV/25",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "11.70.16",
    "description": "M\u00d3DULO1: CONSULTA ACCESO IVE/ILE",
    "price_hidden": "$43,912",
    "coseguro": "$44,338",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO1: CONSULTA ACCESO IVE/ILE $43,912 $44,338 $44,765"
  },
  {
    "code": "11.70.11",
    "description": "M\u00d3DULO 2: ECOGRAF\u00cdA GINECOL\u00d3GICA IVE/ILE",
    "price_hidden": "$17,327",
    "coseguro": "$17,495",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2: ECOGRAF\u00cdA GINECOL\u00d3GICA IVE/ILE $17,327 $17,495 $17,663"
  },
  {
    "code": "11.70.12",
    "description": "M\u00d3DULO 3: ASPIRACI\u00d3N MANUAL ENDOUTERINA (AMEU) AMBULATORIO",
    "price_hidden": "$441,695",
    "coseguro": "$445,984",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3: ASPIRACI\u00d3N MANUAL ENDOUTERINA (AMEU) AMBULATORIO $441,695 $445,984 $450,272"
  },
  {
    "code": "11.70.15",
    "description": "M\u00d3DULO 3: ASPIRACI\u00d3N MANUAL ENDOUTERINA (AMEU) INTERNACION",
    "price_hidden": "$524,026",
    "coseguro": "$529,114",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3: ASPIRACI\u00d3N MANUAL ENDOUTERINA (AMEU) INTERNACION $524,026 $529,114 $534,201"
  },
  {
    "code": "11.70.13",
    "description": "M\u00d3DULO 4: CONSULTA CONTROL POST INTERVENCI\u00d3N Y ANTICONCEPCI\u00d3N",
    "price_hidden": "$14,637",
    "coseguro": "$14,779",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4: CONSULTA CONTROL POST INTERVENCI\u00d3N Y ANTICONCEPCI\u00d3N $14,637 $14,779 $14,922"
  },
  {
    "code": "11.70.14",
    "description": "M\u00d3DULO 5: ANTICONCEPCI\u00d3N CON DIU POST IVE/ILE",
    "price_hidden": "$120,813",
    "coseguro": "$121,986",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 5: ANTICONCEPCI\u00d3N CON DIU POST IVE/ILE $120,813 $121,986 $123,159 ATENCI\u00d3N INTEGRAL PARA LA ANTICONCEPCI\u00d3N OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "11.70.06",
    "description": "M\u00d3DULO LIGADURA TUBARIA (CON INTERNACI\u00d3N) POR LAPAROTOM\u00cdA",
    "price_hidden": "$131,348",
    "coseguro": "$132,623",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO LIGADURA TUBARIA (CON INTERNACI\u00d3N) POR LAPAROTOM\u00cdA $131,348 $132,623 $133,899 11.70.07 M\u00d3DULO LIGADURA TUBARIA (CON INTERNACI\u00d3N) POR VIDEOLAPAROSCOPIA  $493,236 $498,025 $502,813 11.70.08 M\u00d3DULO VASECTOM\u00cdA-AMBULATORIA $219,543 $221,674 $223,806 11.70.17 CONSULTA PRE Y POST VASECTOMIA AMBULATORIA $14,749 $14,892 $15,035 11.70.09 M\u00d3DULO COLOCACI\u00d3N DE DIU- AMBULATORIO $95,133 $96,057 $96,981 SALUD MATERNO-INFANTIL OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "11.70.07",
    "description": "M\u00d3DULO LIGADURA TUBARIA (CON INTERNACI\u00d3N) POR VIDEOLAPAROSCOPIA",
    "price_hidden": "$493,236",
    "coseguro": "$498,025",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.70.08",
    "description": "M\u00d3DULO VASECTOM\u00cdA-AMBULATORIA",
    "price_hidden": "$219,543",
    "coseguro": "$221,674",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "11.70.17",
    "description": "CONSULTA PRE Y POST VASECTOMIA AMBULATORIA",
    "price_hidden": "$14,749",
    "coseguro": "$14,892",
    "bonos": "OC",
    "source": "MEDICAS"
  },
  {
    "code": "11.70.09",
    "description": "M\u00d3DULO COLOCACI\u00d3N DE DIU- AMBULATORIO",
    "price_hidden": "$95,133",
    "coseguro": "$96,057",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "11.04.01",
    "description": "PARTO",
    "price_hidden": "$868,248",
    "coseguro": "$876,677",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "PARTO $868,248 $876,677 $885,107 11.04.03 CES\u00c1REA $612,880 $618,830 $624,780 18.01.04 ECOGRAF\u00cdA TOCOGINECOL\u00d3GICA $23,456 $23,684 $23,911 18.50.60 ECOGRAF\u00cdA MORFOLOGICA DEL EMBARAZO $23,333 $23,560 $23,786 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "11.04.03",
    "description": "CES\u00c1REA",
    "price_hidden": "$612,880",
    "coseguro": "$618,830",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.04",
    "description": "ECOGRAF\u00cdA TOCOGINECOL\u00d3GICA",
    "price_hidden": "$23,456",
    "coseguro": "$23,684",
    "bonos": "10",
    "source": "MEDICAS"
  },
  {
    "code": "18.50.60",
    "description": "ECOGRAF\u00cdA MORFOLOGICA DEL EMBARAZO",
    "price_hidden": "$23,333",
    "coseguro": "$23,560",
    "bonos": "15",
    "source": "MEDICAS"
  },
  {
    "code": "32.90.01",
    "description": "M\u00d3DULO RECEPCI\u00d3N RECI\u00c9N NACIDO - ALTA CONJUNTA",
    "price_hidden": "$47,298",
    "coseguro": "$47,757",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO RECEPCI\u00d3N RECI\u00c9N NACIDO - ALTA CONJUNTA $47,298 $47,757 $48,216 RESTITUCI\u00d3N DE G\u00c9NERO OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "03.90.25",
    "description": "FEMINIZACI\u00d3N DEL TERCIO FACIAL SUPERIOR",
    "price_hidden": "$4,102,383",
    "coseguro": "$4,142,212",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "FEMINIZACI\u00d3N DEL TERCIO FACIAL SUPERIOR $4,102,383 $4,142,212 $4,182,041 03.90.26 FEMINIZACI\u00d3N DEL TERCIO FACIAL MEDIO $2,297,335 $2,319,639 $2,341,943 03.90.27 FEMINIZACI\u00d3N DEL TERCIO FACIAL INFERIOR $4,102,383 $4,142,212 $4,182,041 10.90.04 GENITOPLAST\u00cdA FEMINIZANTE $5,579,241 $5,633,409 $5,687,576 13.90.08 GLUTEOPLASTIA (CON O SIN LIPOTRANSFERENCIA) $2,625,525 $2,651,016 $2,676,506"
  },
  {
    "code": "03.90.26",
    "description": "FEMINIZACI\u00d3N DEL TERCIO FACIAL MEDIO",
    "price_hidden": "$2,297,335",
    "coseguro": "$2,319,639",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "03.90.27",
    "description": "FEMINIZACI\u00d3N DEL TERCIO FACIAL INFERIOR",
    "price_hidden": "$4,102,383",
    "coseguro": "$4,142,212",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "10.90.04",
    "description": "GENITOPLAST\u00cdA FEMINIZANTE",
    "price_hidden": "$5,579,241",
    "coseguro": "$5,633,409",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "13.90.08",
    "description": "GLUTEOPLASTIA (CON O SIN LIPOTRANSFERENCIA)",
    "price_hidden": "$2,625,525",
    "coseguro": "$2,651,016",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.20",
    "description": "TORACOPLAST\u00cdA FEMINIZANTE: CON O SIN COLOCACI\u00d3N DE PR\u00d3TESIS)",
    "price_hidden": "$1,476,858",
    "coseguro": "$1,491,196",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "TORACOPLAST\u00cdA FEMINIZANTE: CON O SIN COLOCACI\u00d3N DE PR\u00d3TESIS) $1,476,858 $1,491,196 $1,505,535"
  },
  {
    "code": "06.90.21",
    "description": "TORACOPLAST\u00cdA MASCULINIZANTE: CON O SIN COLOCACI\u00d3N DE PR\u00d3TESIS)",
    "price_hidden": "$2,527,068",
    "coseguro": "$2,551,603",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "TORACOPLAST\u00cdA MASCULINIZANTE: CON O SIN COLOCACI\u00d3N DE PR\u00d3TESIS) $2,527,068 $2,551,603 $2,576,137"
  },
  {
    "code": "03.13.14",
    "description": "MODULO IMPLANTE COCLEAR (Honorarios M\u00e9dicos)",
    "price_hidden": "$915,453",
    "coseguro": "$924,341",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "MODULO IMPLANTE COCLEAR (Honorarios M\u00e9dicos) $915,453 $924,341 $933,229 03.13.15 MODULO IMPLANTE COCLEAR (Gastos Sanatoriales) $475,923 $480,543 $485,164 03.90.02 M\u00d3DULO POST-IMPLANTE COCLEAR $201,674 $203,632 $205,590 03.90.03 CALIBRACI\u00d3N IMPLANTE COCLEAR $45,750 $46,194 $46,638 NOMENCLADOR OFTALMOLOGIA  OCT/25 NOV/25 DIC/25 CONSULTAS"
  },
  {
    "code": "03.13.15",
    "description": "MODULO IMPLANTE COCLEAR (Gastos Sanatoriales)",
    "price_hidden": "$475,923",
    "coseguro": "$480,543",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "03.90.02",
    "description": "M\u00d3DULO POST-IMPLANTE COCLEAR",
    "price_hidden": "$201,674",
    "coseguro": "$203,632",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "03.90.03",
    "description": "CALIBRACI\u00d3N IMPLANTE COCLEAR",
    "price_hidden": "$45,750",
    "coseguro": "$46,194",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "42.01.00",
    "description": "CONSULTA OFTALMOLOGIA",
    "price_hidden": "$12,900",
    "coseguro": "$12,900",
    "bonos": "OC",
    "source": "MEDICAS",
    "normativa": "CONSULTA OFTALMOLOGIA $12,900 $12,900 $12,900 42.01.20 CONSULTA VESTIDA OFTALMOLOGIA $14,975 $15,120 $15,266 42.01.02 FONDO DE OJO EN PREMATUROS P19  $15,598 $15,750 $15,901 42.01.04 EXAMEN DE PREMATUROS EN SALA DE NEONATOLOG\u00cdA P18  $20,280 $20,477 $20,673 42.01.05 FONDO DE OJOS EN MENORES DE 1 A\u00d1O $10,383 $10,484 $10,585 8 ORBITA ORBITOTOMIA CON ESCISION DE LESION DE ORBITA, EXTRACCION DE CUERPO EXTRA\u00d1O, EXPLORACION,BIOPSIA,DRENAJE, ETC.-CON O SIN APERTURA DE PARED DE ORBITA."
  },
  {
    "code": "42.01.20",
    "description": "CONSULTA VESTIDA OFTALMOLOGIA",
    "price_hidden": "$14,975",
    "coseguro": "$15,120",
    "bonos": "OC",
    "source": "MEDICAS"
  },
  {
    "code": "42.01.02",
    "description": "FONDO DE OJO EN PREMATUROS P19",
    "price_hidden": "$15,598",
    "coseguro": "$15,750",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "42.01.04",
    "description": "EXAMEN DE PREMATUROS EN SALA DE NEONATOLOG\u00cdA P18",
    "price_hidden": "$20,280",
    "coseguro": "$20,477",
    "bonos": "17",
    "source": "MEDICAS"
  },
  {
    "code": "42.01.05",
    "description": "FONDO DE OJOS EN MENORES DE 1 A\u00d1O",
    "price_hidden": "$10,383",
    "coseguro": "$10,484",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "02.01.03",
    "description": "EXTRA\u00d1O, EXPLORACION,BIOPSIA,DRENAJE, ETC.-CON O SIN APERTURA DE PARED",
    "price_hidden": "$219,269",
    "coseguro": "$221,398",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": ""
  },
  {
    "code": "02.01.05",
    "description": "",
    "price_hidden": "$272,091",
    "coseguro": "$274,733",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "REPARACION PLASTICA DE LA ORBITA CON O SIN INJERTO DE PIEL INCLUYE TOMA DEL MISMO. $272,091 $274,733 $277,375"
  },
  {
    "code": "02.01.06",
    "description": "ENUCLEASION O EVISCERAC. DEL GLOBO OCULAR CON O SIN IMPLANTE",
    "price_hidden": "$247,955",
    "coseguro": "$250,363",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "ENUCLEASION O EVISCERAC. DEL GLOBO OCULAR CON O SIN IMPLANTE $247,955 $250,363 $252,770 SEGMENTO ANTERIOR"
  },
  {
    "code": "SEGMENTO",
    "description": "POSTERIOR",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "02.03.01",
    "description": "",
    "price_hidden": "$132,061",
    "coseguro": "$133,343",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "CONJUNTIVOPLASTIA INJERTO LIBRE DE CONJUNTIVA O MEMBRAMA MUCOSA DEL LABIO. OPERACION COLGAJO: FLAPPING DE CONJUNTIVA $132,061 $133,343 $134,626 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "02.03.02",
    "description": "ESCISION DE LESION CONJUNT.QUISTE EPITELIOMA NEVUS PTERIGION",
    "price_hidden": "$35,054",
    "coseguro": "$35,395",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "ESCISION DE LESION CONJUNT.QUISTE EPITELIOMA NEVUS PTERIGION $35,054 $35,395 $35,735"
  },
  {
    "code": "02.03.03",
    "description": "",
    "price_hidden": "$63,244",
    "coseguro": "$63,858",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "INTROD.DE SUBSTANCIAS TERAPEUTIC. SUBCONJUNTIV.Y EN TENNONS CON INCISION Y SUTURA. $63,244 $63,858 $64,472"
  },
  {
    "code": "02.03.05",
    "description": "",
    "price_hidden": "$55,691",
    "coseguro": "$56,232",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "SUTURA DE CONJUNTIVA,INCLUIDA EXTRACCION DE CUERPO EXTRA\u00d1O- BIOPSIA DE CONJUNTIVA. $55,691 $56,232 $56,773"
  },
  {
    "code": "02.04.01",
    "description": "QUERATOPLASTIA LAMINAR, INJERTO DE CORNEA.",
    "price_hidden": "$562,476",
    "coseguro": "$567,937",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "QUERATOPLASTIA LAMINAR, INJERTO DE CORNEA. $562,476 $567,937 $573,398 02.04.02 QUERATOPROTESIS TOTAL QUERATOP LASTIA TOTAL. $1,426,608 $1,440,458 $1,454,309"
  },
  {
    "code": "02.04.02",
    "description": "QUERATOPROTESIS TOTAL QUERATOP LASTIA TOTAL.",
    "price_hidden": "$1,426,608",
    "coseguro": "$1,440,458",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.04.06",
    "description": "",
    "price_hidden": "$137,417",
    "coseguro": "$138,751",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "SUTURA DE HERIDA DE CORNEA CON PROLAPSO DE IRIS Y/O HERIDA DE CRISTALINO.EXTRACCION DE CUERPO EXTRA\u00d1O EN CAMARA ANTERIOR. $137,417 $138,751 $140,085"
  },
  {
    "code": "02.07.01",
    "description": "CIRUGIA DE CATARATAS",
    "price_hidden": "$543,400",
    "coseguro": "$639,500",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "CIRUGIA DE CATARATAS $543,400 $639,500 $735,700 30.01.15 EXTRACCION DE CUERPO EXTRA\u00d1O CONJUNTIVAL. $2,018 $2,037 $2,057 30.01.16 EXTRACCION DE CUERPO EXTRA\u00d1O EN CORNEA. $1,106 $1,117 $1,128 02.90.02 COLOCACI\u00d3N DE ANILLOS INTRAESTROMALES $359,625 $363,116 $366,608 02.90.23 CROSS LINKING UNILATERAL $784,308 $791,923 $799,537 2 1 BQ BQ SEGMENTO POSTERIOR"
  },
  {
    "code": "30.01.15",
    "description": "EXTRACCION DE CUERPO EXTRA\u00d1O CONJUNTIVAL.",
    "price_hidden": "$2,018",
    "coseguro": "$2,037",
    "bonos": "2",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.16",
    "description": "EXTRACCION DE CUERPO EXTRA\u00d1O EN CORNEA.",
    "price_hidden": "$1,106",
    "coseguro": "$1,117",
    "bonos": "1",
    "source": "MEDICAS"
  },
  {
    "code": "02.90.02",
    "description": "COLOCACI\u00d3N DE ANILLOS INTRAESTROMALES",
    "price_hidden": "$359,625",
    "coseguro": "$363,116",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.90.23",
    "description": "CROSS LINKING UNILATERAL",
    "price_hidden": "$784,308",
    "coseguro": "$791,923",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.01.07",
    "description": "ASPIRACION, LAVADO E IMPLANTE DEL VITREO.",
    "price_hidden": "$238,894",
    "coseguro": "$241,213",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "ASPIRACION, LAVADO E IMPLANTE DEL VITREO. $238,894 $241,213 $243,533 02.90.04 VITRECTOM\u00cdA COMPLEJA $1,600,400 $1,616,000 $1,631,537 02.90.01 INYECCI\u00d3N INTRAVITREA DE SUSTANCIAS ANTIANGIOG\u00c9NICAS $253,100 $283,100 $313,500 02.06.03 RETINOPEXIA CON ESCLERECTOMIA E IMPLANTE. $350,408 $353,810 $357,212 02.06.04 RETINOPEXIA Y ESCLERECTOMIA. $417,166 $421,216 $425,266 02.06.05 RETINOPEXIA (DIATERMIA, CRIO, ETC.) $256,858 $259,352 $261,846 02.09.01 FOTOCOAGULACI\u00d3N CON YAG LASER $136,300 $146,300 $155,600 02.50.01 ANGIOGRAF\u00cdA DIGITAL C/ FLUORESCE\u00cdNA UNILATERAL $17,337 $17,505 $17,674 02.50.02 ANGIOGRAF\u00cdA DIGITAL C/ FLUORESCE\u00cdNA BILATERAL $27,743 $28,012 $28,281 02.06.02 FOTOCOAGULACION CON RAYO LASER $46,796 $47,251 $47,705 02.90.05 FOTOCOAGULACI\u00d3N CON RAYO LASER ARGON $109,000 $132,300 $155,600 20 20 20 20 20 PARPADO Y VIA LAGRIMAL"
  },
  {
    "code": "02.90.04",
    "description": "VITRECTOM\u00cdA COMPLEJA",
    "price_hidden": "$1,600,400",
    "coseguro": "$1,616,000",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.90.01",
    "description": "INYECCI\u00d3N INTRAVITREA DE SUSTANCIAS ANTIANGIOG\u00c9NICAS",
    "price_hidden": "$253,100",
    "coseguro": "$283,100",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.06.03",
    "description": "RETINOPEXIA CON ESCLERECTOMIA E IMPLANTE.",
    "price_hidden": "$350,408",
    "coseguro": "$353,810",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.06.04",
    "description": "RETINOPEXIA Y ESCLERECTOMIA.",
    "price_hidden": "$417,166",
    "coseguro": "$421,216",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.06.05",
    "description": "RETINOPEXIA (DIATERMIA, CRIO, ETC.)",
    "price_hidden": "$256,858",
    "coseguro": "$259,352",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.09.01",
    "description": "FOTOCOAGULACI\u00d3N CON YAG LASER",
    "price_hidden": "$136,300",
    "coseguro": "$146,300",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "02.50.01",
    "description": "ANGIOGRAF\u00cdA DIGITAL C/ FLUORESCE\u00cdNA UNILATERAL",
    "price_hidden": "$17,337",
    "coseguro": "$17,505",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "02.50.02",
    "description": "ANGIOGRAF\u00cdA DIGITAL C/ FLUORESCE\u00cdNA BILATERAL",
    "price_hidden": "$27,743",
    "coseguro": "$28,012",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "02.06.02",
    "description": "FOTOCOAGULACION CON RAYO LASER",
    "price_hidden": "$46,796",
    "coseguro": "$47,251",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "02.90.05",
    "description": "FOTOCOAGULACI\u00d3N CON RAYO LASER ARGON",
    "price_hidden": "$109,000",
    "coseguro": "$132,300",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "PARPADO",
    "description": "VIA LAGRIMAL",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "02.02.01",
    "description": "RECONSTRUCCION TOTAL DEL PARPADO. TECNICA DE HUGJES O SIMILAR",
    "price_hidden": "$233,621",
    "coseguro": "$235,889",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "RECONSTRUCCION TOTAL DEL PARPADO. TECNICA DE HUGJES O SIMILAR $233,621 $235,889 $238,157"
  },
  {
    "code": "02.02.02",
    "description": "",
    "price_hidden": "$198,733",
    "coseguro": "$200,663",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "BLEFAROPLASTIA-INJERTO,CANTOPLASTIA,TRASOPLASTIA,RESTAURACION PLASTICA DE  BASE CILIAR, CORRECCION DE PTOSIS- UNILATERAL $198,733 $200,663 $202,592"
  },
  {
    "code": "02.02.03",
    "description": "BLEFARORRAFIA PARCIAL O TOTAL.",
    "price_hidden": "$68,781",
    "coseguro": "$69,449",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "BLEFARORRAFIA PARCIAL O TOTAL. $68,781 $69,449 $70,117 02.02.04 BLEFAROCHALASIS. $78,691 $79,455 $80,219 ESCISION DE PARPADO, BLEFARECTOMIA-PIEL DE PARPADO. GLANDULA MEIBOMIANA,CHALAZIO, SUTURA DE PIEL DE PARPADO- BLEFAROTOMIA-ABSCESO-ORZUELO"
  },
  {
    "code": "02.02.04",
    "description": "BLEFAROCHALASIS.",
    "price_hidden": "$78,691",
    "coseguro": "$79,455",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "02.02.05",
    "description": "MEIBOMIANA,CHALAZIO, SUTURA DE PIEL DE PARPADO-",
    "price_hidden": "$32,563",
    "coseguro": "$32,879",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": ""
  },
  {
    "code": "02.08.01",
    "description": "",
    "price_hidden": "$236,354",
    "coseguro": "$238,648",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "DACRIOCISTORRINOST.FISTULIZAC. SACO LAGRIMAL EN CAV.NASAL .OPERACION PLASTICA EN CANALICULOS. $236,354 $238,648 $240,943 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "02.08.03",
    "description": "",
    "price_hidden": "$19,492",
    "coseguro": "$19,681",
    "bonos": "17",
    "source": "MEDICAS",
    "normativa": "DRENAJE DE GLANDULA O SACO LAGRIMAL-ABS.SECC.PAPILA LAGRIMAL PILA LAGRIMAL-ESTRICTUROTOMIA. $19,492 $19,681 $19,870"
  },
  {
    "code": "02.08.04",
    "description": "CATETERIZ. DE CONDUCTO LAGRIMO NASAL EN QUIR.CON ANEST.GRAL.",
    "price_hidden": "$43,584",
    "coseguro": "$44,007",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "CATETERIZ. DE CONDUCTO LAGRIMO NASAL EN QUIR.CON ANEST.GRAL. $43,584 $44,007 $44,431 30.01.18 DILATACION DE CONDUCTO LACRIMO NASAL CON INTUBACION. $5,788 $5,844 $5,900 30.01.21 CATETERIZACION DE CONDUCTO LACRIMONASAL- $2,018 $2,037 $2,057 5 2 GLAUCOMA BQ BQ ESTRABISMO"
  },
  {
    "code": "30.01.18",
    "description": "DILATACION DE CONDUCTO LACRIMO NASAL CON INTUBACION.",
    "price_hidden": "$5,788",
    "coseguro": "$5,844",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.21",
    "description": "CATETERIZACION DE CONDUCTO LACRIMONASAL-",
    "price_hidden": "$2,018",
    "coseguro": "$2,037",
    "bonos": "2",
    "source": "MEDICAS"
  },
  {
    "code": "02.05.01",
    "description": "TRATAMIENTO QUIRURGICO DEL GLAUCOMA.",
    "price_hidden": "$481,100",
    "coseguro": "$536,700",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "TRATAMIENTO QUIRURGICO DEL GLAUCOMA. $481,100 $536,700 $592,200 02.05.02 COREOPLASTIA.IRIDECTOMIA. $233,108 $235,371 $237,634"
  },
  {
    "code": "02.05.02",
    "description": "COREOPLASTIA.IRIDECTOMIA.",
    "price_hidden": "$233,108",
    "coseguro": "$235,371",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "02.01.09",
    "description": "",
    "price_hidden": "$290,361",
    "coseguro": "$293,180",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "TRATAMIENTO QUIRURGICO CORRECTOR DEL ESTRABISMO-MIOTOTOMIAS PLEGAMIENTOS,AVANZAMIENTOS,INJERTOS DE SILICONAS,ETC. UNI O BILATERALES. $290,361 $293,180 $295,999 2 3 TEST VISUALES"
  },
  {
    "code": "30.01.07",
    "description": "EJERCICIOS ORTOPTICOS, POR SESION.",
    "price_hidden": "$2,018",
    "coseguro": "$2,037",
    "bonos": "2",
    "source": "MEDICAS",
    "normativa": "EJERCICIOS ORTOPTICOS, POR SESION. $2,018 $2,037 $2,057 30.01.20 ESTUDIO DE FIJACION EN EL ESTRABISMO -CON VISUSCOPIO- $2,768 $2,795 $2,822"
  },
  {
    "code": "30.01.20",
    "description": "ESTUDIO DE FIJACION EN EL ESTRABISMO -CON VISUSCOPIO-",
    "price_hidden": "$2,768",
    "coseguro": "$2,795",
    "bonos": "3",
    "source": "MEDICAS"
  },
  {
    "code": "18.01.09",
    "description": "ECOGRAF\u00cdA OFTALMOL\u00d3GICA UNI O BILATERAL",
    "price_hidden": "$11,319",
    "coseguro": "$11,429",
    "bonos": "9",
    "source": "MEDICAS",
    "normativa": "ECOGRAF\u00cdA OFTALMOL\u00d3GICA UNI O BILATERAL $11,319 $11,429 $11,539 30.01.04 FONDO DE OJO Y/O ESQUIASCOPIA CON DILATACION PUPILAR.- $1,926 $1,945 $1,964 30.01.05 TONOMETRIA. $1,926 $1,945 $1,964 30.01.08 GONIOSCOPIA $1,778 $1,796 $1,813 30.01.09 CURVA TENSIONAL $3,313 $3,345 $3,378 30.01.11 RETINOGRAFIA  $20,100 $27,200 $34,000 30.01.13 RETINOFLUORESCEINOGRAFIA- UNI- LATERAL- $7,809 $7,885 $7,961 30.01.19 OFTALMOSCOPIA INDIRECTA BINOCULAR CON ESQUEMA DE FONDO DE OJO. $1,778 $1,796 $1,813 30.02.01 CAMPIMETR\u00cdA COMPUTARIZADA $19,400 $23,200 $27,000 30.02.02 PAQUIMETR\u00cdA COMPUTARIZADA $12,700 $17,700 $22,800 30.02.04 TOPOGRAF\u00cdA CORNEAL $19,000 $25,400 $31,800 30.02.05 ANGIOGRAF\u00cdA DIGITAL C/ INDOCIANINA UNILATERAL. $30,245 $30,539 $30,833 30.02.06 ANGIOGRAF\u00cdA DIGITAL C/ INDOCIANINA BILATERAL $48,601 $49,073 $49,545 30.50.01 BIOMETR\u00cdA OCULAR $5,563 $5,617 $5,671 30.50.02 TOMOGRAF\u00cdA OCULAR DE COHERENCIA $69,100 $85,300 $101,200 30.50.03 H.R.T. TOMOGRAF\u00cdA CONFOCAL LASER UNI O BILATERAL $33,995 $34,325 $34,655"
  },
  {
    "code": "30.01.04",
    "description": "FONDO DE OJO Y/O ESQUIASCOPIA CON DILATACION PUPILAR.-",
    "price_hidden": "$1,926",
    "coseguro": "$1,945",
    "bonos": "2",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.05",
    "description": "TONOMETRIA.",
    "price_hidden": "$1,926",
    "coseguro": "$1,945",
    "bonos": "2",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.08",
    "description": "GONIOSCOPIA",
    "price_hidden": "$1,778",
    "coseguro": "$1,796",
    "bonos": "2",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.09",
    "description": "CURVA TENSIONAL",
    "price_hidden": "$3,313",
    "coseguro": "$3,345",
    "bonos": "3",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.11",
    "description": "RETINOGRAFIA",
    "price_hidden": "$20,100",
    "coseguro": "$27,200",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.13",
    "description": "RETINOFLUORESCEINOGRAFIA- UNI- LATERAL-",
    "price_hidden": "$7,809",
    "coseguro": "$7,885",
    "bonos": "7",
    "source": "MEDICAS"
  },
  {
    "code": "30.01.19",
    "description": "OFTALMOSCOPIA INDIRECTA BINOCULAR CON ESQUEMA DE FONDO DE OJO.",
    "price_hidden": "$1,778",
    "coseguro": "$1,796",
    "bonos": "2",
    "source": "MEDICAS"
  },
  {
    "code": "30.02.01",
    "description": "CAMPIMETR\u00cdA COMPUTARIZADA",
    "price_hidden": "$19,400",
    "coseguro": "$23,200",
    "bonos": "14",
    "source": "MEDICAS"
  },
  {
    "code": "30.02.02",
    "description": "PAQUIMETR\u00cdA COMPUTARIZADA",
    "price_hidden": "$12,700",
    "coseguro": "$17,700",
    "bonos": "7",
    "source": "MEDICAS"
  },
  {
    "code": "30.02.04",
    "description": "TOPOGRAF\u00cdA CORNEAL",
    "price_hidden": "$19,000",
    "coseguro": "$25,400",
    "bonos": "10",
    "source": "MEDICAS"
  },
  {
    "code": "30.02.05",
    "description": "ANGIOGRAF\u00cdA DIGITAL C/ INDOCIANINA UNILATERAL.",
    "price_hidden": "$30,245",
    "coseguro": "$30,539",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "30.02.06",
    "description": "ANGIOGRAF\u00cdA DIGITAL C/ INDOCIANINA BILATERAL",
    "price_hidden": "$48,601",
    "coseguro": "$49,073",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "30.50.01",
    "description": "BIOMETR\u00cdA OCULAR",
    "price_hidden": "$5,563",
    "coseguro": "$5,617",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "30.50.02",
    "description": "TOMOGRAF\u00cdA OCULAR DE COHERENCIA",
    "price_hidden": "$69,100",
    "coseguro": "$85,300",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "30.50.03",
    "description": "H.R.T. TOMOGRAF\u00cdA CONFOCAL LASER UNI O BILATERAL",
    "price_hidden": "$33,995",
    "coseguro": "$34,325",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "02.90.06",
    "description": "TRATAMIENTO LASER DE RETINOPATIA DEL PREMATURO",
    "price_hidden": "$842,335",
    "coseguro": "$850,513",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "TRATAMIENTO LASER DE RETINOPATIA DEL PREMATURO $842,335 $850,513 $858,691 S/C TRASPLANTES OCT/25 NOV/25 DIC/25 COSEGUROS"
  },
  {
    "code": "50.71.01",
    "description": "M\u00d3DULO ACTUALIZACION PRE TRASPLANTE RENAL",
    "price_hidden": "$547,956",
    "coseguro": "$553,276",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO ACTUALIZACION PRE TRASPLANTE RENAL $547,956 $553,276 $558,596 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "50.71.02",
    "description": "M\u00d3DULO PRE TRASPLANTE RENAL CADAV\u00c9RICO",
    "price_hidden": "$1,700,043",
    "coseguro": "$1,716,549",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO PRE TRASPLANTE RENAL CADAV\u00c9RICO $1,700,043 $1,716,549 $1,733,054 50.71.08 M\u00d3DULO PRE TRASPLANTE CARDIACO $2,482,228 $2,506,327 $2,530,426"
  },
  {
    "code": "50.71.08",
    "description": "M\u00d3DULO PRE TRASPLANTE CARDIACO",
    "price_hidden": "$2,482,228",
    "coseguro": "$2,506,327",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "50.71.10",
    "description": "M\u00d3DULO PRE TRASPLANTE HEP\u00c1TICO",
    "price_hidden": "$2,598,521",
    "coseguro": "$2,623,749",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO PRE TRASPLANTE HEP\u00c1TICO $2,598,521 $2,623,749 $2,648,977"
  },
  {
    "code": "50.10.08",
    "description": "M\u00d3DULO PRE-TRASPLANTE RENOPANCREATICO",
    "price_hidden": "$1,881,381",
    "coseguro": "$1,899,647",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO PRE-TRASPLANTE RENOPANCREATICO $1,881,381 $1,899,647 $1,917,913"
  },
  {
    "code": "50.10.09",
    "description": "M\u00d3DULO PRE-TRASPLANTE RENOPANCREATICO SEGUIMIENTO ANUAL",
    "price_hidden": "$386,986",
    "coseguro": "$390,743",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO PRE-TRASPLANTE RENOPANCREATICO SEGUIMIENTO ANUAL $386,986 $390,743 $394,500"
  },
  {
    "code": "50.71.03",
    "description": "M\u00d3DULO POST TRASPLANTE RENAL POR CONSULTORIO EXTERNO (1er semestre)",
    "price_hidden": "$307,158",
    "coseguro": "$310,140",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE RENAL POR CONSULTORIO EXTERNO (1er semestre) $307,158 $310,140 $313,122"
  },
  {
    "code": "50.71.04",
    "description": "M\u00d3DULO POST TRASPLANTE RENAL POR CONSULTORIO EXTERNO (2dor semestra)",
    "price_hidden": "$241,455",
    "coseguro": "$243,800",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE RENAL POR CONSULTORIO EXTERNO (2dor semestra) $241,455 $243,800 $246,144"
  },
  {
    "code": "50.71.05",
    "description": "",
    "price_hidden": "$211,889",
    "coseguro": "$213,947",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE RENAL POR CONSULTORIO EXTERNO (a partir mes 13 del trasplante) $211,889 $213,947 $216,004"
  },
  {
    "code": "50.71.06",
    "description": "M\u00d3DULO POST TRASPLANTE RENAL CONTROL VIRUS BK",
    "price_hidden": "$129,762",
    "coseguro": "$131,022",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE RENAL CONTROL VIRUS BK $129,762 $131,022 $132,281"
  },
  {
    "code": "50.71.07",
    "description": "M\u00d3DULO POST TRASPLANTE RENAL CONTROL HISTOPLASMOSIS",
    "price_hidden": "$158,671",
    "coseguro": "$160,211",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE RENAL CONTROL HISTOPLASMOSIS $158,671 $160,211 $161,752"
  },
  {
    "code": "50.71.09",
    "description": "M\u00d3DULO POST TRASPLANTE CARD\u00cdACO CON BEM",
    "price_hidden": "$2,022,970",
    "coseguro": "$2,042,610",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE CARD\u00cdACO CON BEM $2,022,970 $2,042,610 $2,062,251"
  },
  {
    "code": "50.71.11",
    "description": "M\u00d3DULO POST TRASPLANTE HEP\u00c1TICO POR CONSULTORIO EXTERNO",
    "price_hidden": "$1,084,086",
    "coseguro": "$1,094,611",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO POST TRASPLANTE HEP\u00c1TICO POR CONSULTORIO EXTERNO $1,084,086 $1,094,611 $1,105,136"
  },
  {
    "code": "50.70.16",
    "description": "",
    "price_hidden": "$336,724",
    "coseguro": "$339,993",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 1 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO - PRIMER MES $336,724 $339,993 $343,262"
  },
  {
    "code": "50.70.17",
    "description": "",
    "price_hidden": "$296,974",
    "coseguro": "$299,857",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 1 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO - SEGUNDO MES $296,974 $299,857 $302,740"
  },
  {
    "code": "50.70.18",
    "description": "",
    "price_hidden": "$229,958",
    "coseguro": "$232,190",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 1 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO - TERCER MES $229,958 $232,190 $234,423"
  },
  {
    "code": "50.70.19",
    "description": "",
    "price_hidden": "$115,636",
    "coseguro": "$116,758",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (SEGUNDO TRIMESTRE) - PRIMER MES $115,636 $116,758 $117,881"
  },
  {
    "code": "50.70.20",
    "description": "",
    "price_hidden": "$115,636",
    "coseguro": "$116,758",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (SEGUNDO TRIMESTRE) - SEGUNDO MES $115,636 $116,758 $117,881"
  },
  {
    "code": "50.70.21",
    "description": "",
    "price_hidden": "$213,204",
    "coseguro": "$215,273",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (SEGUNDO TRIMESTRE) - TERCER MES $213,204 $215,273 $217,343"
  },
  {
    "code": "50.70.22",
    "description": "",
    "price_hidden": "$115,636",
    "coseguro": "$116,758",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (TERCER TRIMESTRE) - PRIMER MES $115,636 $116,758 $117,881"
  },
  {
    "code": "50.70.23",
    "description": "",
    "price_hidden": "$115,636",
    "coseguro": "$116,758",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (TERCER TRIMESTRE) - SEGUNDO MES $115,636 $116,758 $117,881"
  },
  {
    "code": "50.70.24",
    "description": "",
    "price_hidden": "$213,204",
    "coseguro": "$215,273",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (TERCER TRIMESTRE) - TERCER MES $213,204 $215,273 $217,343"
  },
  {
    "code": "50.70.25",
    "description": "",
    "price_hidden": "$115,636",
    "coseguro": "$116,758",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (CUARTO TRIMESTRE) - PRIMER MES $115,636 $116,758 $117,881"
  },
  {
    "code": "50.70.26",
    "description": "",
    "price_hidden": "$115,636",
    "coseguro": "$116,758",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (CUARTO TRIMESTRE) - SEGUNDO MES $115,636 $116,758 $117,881"
  },
  {
    "code": "50.70.27",
    "description": "",
    "price_hidden": "$213,204",
    "coseguro": "$215,273",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 2 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO (CUARTO TRIMESTRE) - TERCER MES $213,204 $215,273 $217,343 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "50.70.28",
    "description": "",
    "price_hidden": "$64,060",
    "coseguro": "$64,682",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 3 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO - PRIMER MES $64,060 $64,682 $65,303"
  },
  {
    "code": "50.70.29",
    "description": "",
    "price_hidden": "$213,204",
    "coseguro": "$215,273",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 3 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO - TERCER MES $213,204 $215,273 $217,343"
  },
  {
    "code": "50.70.30",
    "description": "MODULO 4 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO",
    "price_hidden": "$190,865",
    "coseguro": "$192,718",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "MODULO 4 SEGUIMIENTO POST TRASPLANTE RENO-PANCREAS SIMULTANEO $190,865 $192,718 $194,571 50.10.08 M\u00d3DULO PRE-TRASPLANTE RENOPANCREATICO $1,881,381 $1,899,647 $1,917,913 50.10.09 M\u00d3DULO PRE-TRASPLANTE RENOPANCREATICO SEGUIMIENTO ANUAL $386,986 $390,743 $394,500 24.12.01 RECOLECCI\u00d3N Y CRIOPRESERVACI\u00d3N DE C\u00c9LULAS PROGENITORAS $2,807,785 $2,835,045 $2,862,305 50.07.01 TRASPLANTE CARD\u00cdACO - EXCLUYE ANESTESIA NIVEL 7 X 4 $24,321,955 $24,558,091 $24,794,226 50.08.02 TRASPLANTE HEP\u00c1TICO ADULTO (CADAV\u00c9RICO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $36,094,469 $36,444,900 $36,795,332 50.08.04 TRASPLANTE HEP\u00c1TICO ADULTO (VIVO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $38,698,902 $39,074,620 $39,450,337"
  },
  {
    "code": "24.12.01",
    "description": "RECOLECCI\u00d3N Y CRIOPRESERVACI\u00d3N DE C\u00c9LULAS PROGENITORAS",
    "price_hidden": "$2,807,785",
    "coseguro": "$2,835,045",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.07.01",
    "description": "TRASPLANTE CARD\u00cdACO - EXCLUYE ANESTESIA NIVEL 7 X 4 $24,321,955",
    "price_hidden": "",
    "coseguro": "$24,558,091",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.08.02",
    "description": "TRASPLANTE HEP\u00c1TICO ADULTO (CADAV\u00c9RICO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $36,094,469",
    "price_hidden": "",
    "coseguro": "$36,444,900",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.08.04",
    "description": "TRASPLANTE HEP\u00c1TICO ADULTO (VIVO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $38,698,902",
    "price_hidden": "",
    "coseguro": "$39,074,620",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.08.01",
    "description": "$30,605,710",
    "price_hidden": "",
    "coseguro": "$30,902,853",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "TRASPLANTE HEP\u00c1TICO PEDI\u00c1TRICO (CADAV\u00c9RICO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $30,605,710 $30,902,853 $31,199,996"
  },
  {
    "code": "50.08.03",
    "description": "TRASPLANTE HEP\u00c1TICO PEDI\u00c1TRICO (VIVO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $34,528,129",
    "price_hidden": "",
    "coseguro": "$34,863,354",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "TRASPLANTE HEP\u00c1TICO PEDI\u00c1TRICO (VIVO) - EXCLUYE ANESTESIA NIVEL 7 X 3 $34,528,129 $34,863,354 $35,198,578 50.01.01 TRASPLANTE M\u00c9DULA \u00d3SEA AUT\u00d3LOGO $22,012,196 $22,225,906 $22,439,617 50.01.02 TRASPLANTE M\u00c9DULA \u00d3SEA ALOG\u00c9NICO RELACIONADO HISTOID\u00c9NTICO $29,466,435 $29,752,516 $30,038,598 50.01.03 TRASPLANTE M\u00c9DULA \u00d3SEA ALOG\u00c9NICO RELACIONADO HAPLOIND\u00c9NTICO $50,692,175 $51,184,332 $51,676,489"
  },
  {
    "code": "50.01.01",
    "description": "TRASPLANTE M\u00c9DULA \u00d3SEA AUT\u00d3LOGO $22,012,196",
    "price_hidden": "",
    "coseguro": "$22,225,906",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.01.02",
    "description": "TRASPLANTE M\u00c9DULA \u00d3SEA ALOG\u00c9NICO RELACIONADO HISTOID\u00c9NTICO $29,466,435",
    "price_hidden": "",
    "coseguro": "$29,752,516",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.01.03",
    "description": "TRASPLANTE M\u00c9DULA \u00d3SEA ALOG\u00c9NICO RELACIONADO HAPLOIND\u00c9NTICO $50,692,175",
    "price_hidden": "",
    "coseguro": "$51,184,332",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "50.01.04",
    "description": "$54,753,226",
    "price_hidden": "",
    "coseguro": "$55,284,811",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "TRASPLANTE M\u00c9DULA \u00d3SEA ALOG\u00c9NICO NO RELACIONADO - B\u00daSQUEDA INTERNACIONAL) $54,753,226 $55,284,811 $55,816,395"
  },
  {
    "code": "50.10.01",
    "description": "TRASPLANTE RENAL CADAV\u00c9RICO -EXCLUYEANESTESIA NIVEL 7 X 2 $12,395,370",
    "price_hidden": "",
    "coseguro": "$12,515,713",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "TRASPLANTE RENAL CADAV\u00c9RICO -EXCLUYEANESTESIA NIVEL 7 X 2 $12,395,370 $12,515,713 $12,636,057 50.08.05 TRASPLANTE RENOPANCREATICO - EXCLUYE ANESTESIA NIVEL 7 X 3 $37,529,732 $37,894,099 $38,258,465 RADIOTERAPIA OCT/25 NOV/25 DIC/25 COSEGUROS"
  },
  {
    "code": "50.08.05",
    "description": "TRASPLANTE RENOPANCREATICO - EXCLUYE ANESTESIA NIVEL 7 X 3 $37,529,732",
    "price_hidden": "",
    "coseguro": "$37,894,099",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.13",
    "description": "BETATERAPIA",
    "price_hidden": "$1,216,816",
    "coseguro": "$1,228,630",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "BETATERAPIA $1,216,816 $1,228,630 $1,240,443 35.90.02 BRAQUITERAPIA 2 DIAS $381,258 $384,960 $388,661 35.90.04 BRAQUITERAPIA 3 DIAS $472,290 $476,875 $481,460 35.90.05 BRAQUITERAPIA 4 DIAS $606,346 $612,232 $618,119 35.90.03 BRAQUITERAPIA 5 DIAS $730,090 $737,178 $744,266"
  },
  {
    "code": "35.90.02",
    "description": "BRAQUITERAPIA 2 DIAS",
    "price_hidden": "$381,258",
    "coseguro": "$384,960",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.04",
    "description": "BRAQUITERAPIA 3 DIAS",
    "price_hidden": "$472,290",
    "coseguro": "$476,875",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.05",
    "description": "BRAQUITERAPIA 4 DIAS",
    "price_hidden": "$606,346",
    "coseguro": "$612,232",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.03",
    "description": "BRAQUITERAPIA 5 DIAS",
    "price_hidden": "$730,090",
    "coseguro": "$737,178",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.18",
    "description": "BRAQUITERAPIA ENDOCAVITARIA GINECOLOGICA - ALTA TASA",
    "price_hidden": "$3,660,760",
    "coseguro": "$3,696,301",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "BRAQUITERAPIA ENDOCAVITARIA GINECOLOGICA - ALTA TASA $3,660,760 $3,696,301 $3,731,843 35.90.14 BRAQUITERAPIA INTERSTICIAL PROSTATICA $3,294,684 $3,326,671 $3,358,658 26.90.01 IRRADIACION DE SANGRE Y PLAQUETAS $48,673 $49,145 $49,618 35.90.07 RADIONEUROCIRUGIA ESTEREOTAXICA $10,105,760 $10,203,874 $10,301,988 35.90.16 RADIOTERAPIA DE INTENSIDAD MODULADA (IMRT) - OTRAS REGIONES $6,599,680 $6,663,754 $6,727,829 35.90.15 RADIOTERAPIA DE INTENSIDAD MODULADA (IMRT) - PROSTATA $6,599,680 $6,663,754 $6,727,829 35.90.09 RADIOTERAPIA TRIDIMENSIONAL CONFORMADA $3,660,760 $3,696,301 $3,731,843 35.90.19 RADIOTERAPIA GUIADA POR IM\u00c1GENES (IGRT) $13,199,359 $13,327,508 $13,455,658 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "35.90.14",
    "description": "BRAQUITERAPIA INTERSTICIAL PROSTATICA",
    "price_hidden": "$3,294,684",
    "coseguro": "$3,326,671",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "26.90.01",
    "description": "IRRADIACION DE SANGRE Y PLAQUETAS",
    "price_hidden": "$48,673",
    "coseguro": "$49,145",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.07",
    "description": "RADIONEUROCIRUGIA ESTEREOTAXICA $10,105,760",
    "price_hidden": "",
    "coseguro": "$10,203,874",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.16",
    "description": "RADIOTERAPIA DE INTENSIDAD MODULADA (IMRT) - OTRAS REGIONES",
    "price_hidden": "$6,599,680",
    "coseguro": "$6,663,754",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.15",
    "description": "RADIOTERAPIA DE INTENSIDAD MODULADA (IMRT) - PROSTATA",
    "price_hidden": "$6,599,680",
    "coseguro": "$6,663,754",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.09",
    "description": "RADIOTERAPIA TRIDIMENSIONAL CONFORMADA",
    "price_hidden": "$3,660,760",
    "coseguro": "$3,696,301",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.19",
    "description": "RADIOTERAPIA GUIADA POR IM\u00c1GENES (IGRT) $13,199,359",
    "price_hidden": "",
    "coseguro": "$13,327,508",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "35.90.20",
    "description": "RADIOTERAPIA CORPORAL ESTEREOTACTICA (SBRT) $13,199,359",
    "price_hidden": "",
    "coseguro": "$13,327,508",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "RADIOTERAPIA CORPORAL ESTEREOTACTICA (SBRT) $13,199,359 $13,327,508 $13,455,658 DI\u00c1LISIS OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "27.90.01",
    "description": "COLOCACI\u00d3N DE CATETER PERITONEAL Y PER\u00cdODO DE ENTRENAMIENTO",
    "price_hidden": "$1,537,725",
    "coseguro": "$1,552,655",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "COLOCACI\u00d3N DE CATETER PERITONEAL Y PER\u00cdODO DE ENTRENAMIENTO $1,537,725 $1,552,655 $1,567,584 27.90.04 DI\u00c1LISIS PERITONEAL CONTINUA AMBULATORIA $3,779,427 $3,816,121 $3,852,814 27.90.03 HEMODI\u00c1LISIS X SESI\u00d3N  $286,266 $289,045 $291,825 27.90.23 HEMODI\u00c1LISIS X SESI\u00d3N CON TRASLADO AMBULANCIA INCLUIDO $343,043 $346,373 $349,704 27.90.24 HEMODI\u00c1LISIS X SESI\u00d3N PACIENTE HIV+ $343,043 $346,373 $349,704 27.90.02 RECOLOCACI\u00d3N DE CAT\u00c9TER PERITONEAL $442,520 $446,817 $451,113 27.90.05 TRANSPORTE DE PACIENTES (VALOR POR KM) $1,437 $1,451 $1,465 ASISTENCIA NUTRICIONAL OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "27.90.04",
    "description": "DI\u00c1LISIS PERITONEAL CONTINUA AMBULATORIA",
    "price_hidden": "$3,779,427",
    "coseguro": "$3,816,121",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "27.90.03",
    "description": "HEMODI\u00c1LISIS X SESI\u00d3N",
    "price_hidden": "$286,266",
    "coseguro": "$289,045",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "27.90.23",
    "description": "HEMODI\u00c1LISIS X SESI\u00d3N CON TRASLADO AMBULANCIA INCLUIDO",
    "price_hidden": "$343,043",
    "coseguro": "$346,373",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "27.90.24",
    "description": "HEMODI\u00c1LISIS X SESI\u00d3N PACIENTE HIV+",
    "price_hidden": "$343,043",
    "coseguro": "$346,373",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "27.90.02",
    "description": "RECOLOCACI\u00d3N DE CAT\u00c9TER PERITONEAL",
    "price_hidden": "$442,520",
    "coseguro": "$446,817",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "27.90.05",
    "description": "TRANSPORTE DE PACIENTES (VALOR POR KM)",
    "price_hidden": "$1,437",
    "coseguro": "$1,451",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.03",
    "description": "M\u00d3DULO NUTRICI\u00d3N ENTERAL DOMICILIARIA ALTA COMPLEJIDAD",
    "price_hidden": "$54,618",
    "coseguro": "$55,148",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO NUTRICI\u00d3N ENTERAL DOMICILIARIA ALTA COMPLEJIDAD $54,618 $55,148 $55,678 19.90.02 M\u00d3DULO NUTRICI\u00d3N ENTERAL DOMICILIARIA BAJA COMPLEJIDAD $23,761 $23,992 $24,222 19.90.01 M\u00d3DULO NUTRICI\u00d3N ENTERAL DOMICILIARIA PEDI\u00c1TRICA $23,761 $23,992 $24,222 19.90.05 M\u00d3DULO DISFAGIA $32,771 $33,089 $33,407 19.90.04 M\u00d3DULO SOPORTE ORAL COMPLEMENTARIO $11,078 $11,185 $11,293"
  },
  {
    "code": "19.90.02",
    "description": "M\u00d3DULO NUTRICI\u00d3N ENTERAL DOMICILIARIA BAJA COMPLEJIDAD",
    "price_hidden": "$23,761",
    "coseguro": "$23,992",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.01",
    "description": "M\u00d3DULO NUTRICI\u00d3N ENTERAL DOMICILIARIA PEDI\u00c1TRICA",
    "price_hidden": "$23,761",
    "coseguro": "$23,992",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.05",
    "description": "M\u00d3DULO DISFAGIA",
    "price_hidden": "$32,771",
    "coseguro": "$33,089",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.04",
    "description": "M\u00d3DULO SOPORTE ORAL COMPLEMENTARIO",
    "price_hidden": "$11,078",
    "coseguro": "$11,185",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.06",
    "description": "MODULO ALIMENTACION PARENTERAL (EXCLUYE PROVISION ACCESO VASCULAR)",
    "price_hidden": "$260,085",
    "coseguro": "$262,610",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "MODULO ALIMENTACION PARENTERAL (EXCLUYE PROVISION ACCESO VASCULAR) $260,085 $262,610 $265,135 19.90.13 M\u00d3DULO ALERGIA PROTEINA ALIMENTARIA $38,232 $38,604 $38,975 19.90.14 M\u00d3DULO TRASTORNO CONDUCTA ALIMENTARIA $20,646 $20,846 $21,046 19.90.15 M\u00d3DULO CETOGENICO $38,232 $38,604 $38,975 19.90.16 M\u00d3DULO PERIOPERATORIO CIRUGIA MAYOR $21,847 $22,059 $22,271 19.90.17 M\u00d3DULO DIABETES INICIO $9,412 $9,504 $9,595 19.90.18 M\u00d3DULO DIABETES INICIO SUPLEMENTADO $14,037 $14,173 $14,309 19.90.19 M\u00d3DULO DIABETES SEGUIMIENTO $6,609 $6,673 $6,737 19.90.20 M\u00d3DULO DIABETES PACIENTES CRONICOS $17,332 $17,500 $17,669 19.90.21 TALLER $10,432 $10,533 $10,635 OBESIDAD OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "19.90.13",
    "description": "M\u00d3DULO ALERGIA PROTEINA ALIMENTARIA",
    "price_hidden": "$38,232",
    "coseguro": "$38,604",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.14",
    "description": "M\u00d3DULO TRASTORNO CONDUCTA ALIMENTARIA",
    "price_hidden": "$20,646",
    "coseguro": "$20,846",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.15",
    "description": "M\u00d3DULO CETOGENICO",
    "price_hidden": "$38,232",
    "coseguro": "$38,604",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.16",
    "description": "M\u00d3DULO PERIOPERATORIO CIRUGIA MAYOR",
    "price_hidden": "$21,847",
    "coseguro": "$22,059",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.17",
    "description": "M\u00d3DULO DIABETES INICIO",
    "price_hidden": "$9,412",
    "coseguro": "$9,504",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.18",
    "description": "M\u00d3DULO DIABETES INICIO SUPLEMENTADO",
    "price_hidden": "$14,037",
    "coseguro": "$14,173",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.19",
    "description": "M\u00d3DULO DIABETES SEGUIMIENTO",
    "price_hidden": "$6,609",
    "coseguro": "$6,673",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.20",
    "description": "M\u00d3DULO DIABETES PACIENTES CRONICOS",
    "price_hidden": "$17,332",
    "coseguro": "$17,500",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.21",
    "description": "TALLER",
    "price_hidden": "$10,432",
    "coseguro": "$10,533",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.30",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: VALORACI\u00d3N INICIAL",
    "price_hidden": "$26,745",
    "coseguro": "$27,004",
    "bonos": "17",
    "source": "MEDICAS",
    "normativa": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: VALORACI\u00d3N INICIAL $26,745 $27,004 $27,264 19.90.31 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO INICIO $80,234 $81,013 $81,792 19.90.32 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO SEGUIMIENTO I $80,234 $81,013 $81,792 19.90.33 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO SEGUIMIENTO II $80,234 $81,013 $81,792 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "19.90.31",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO INICIO",
    "price_hidden": "$80,234",
    "coseguro": "$81,013",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.32",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO SEGUIMIENTO I",
    "price_hidden": "$80,234",
    "coseguro": "$81,013",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.33",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO SEGUIMIENTO II",
    "price_hidden": "$80,234",
    "coseguro": "$81,013",
    "bonos": "19",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.34",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO POSQUIR\u00daRGICO",
    "price_hidden": "$49,389",
    "coseguro": "$49,868",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO POSQUIR\u00daRGICO $49,389 $49,868 $50,348 19.90.46 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO POST PUIO $49,389 $49,868 $50,348 19.90.47 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO INICIO SP $80,234 $81,013 $81,792 19.90.48 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: MODULO SEGUIMIENTO I SP $80,234 $81,013 $81,792 19.90.49 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: MODULO SEGUIMIENTO II SP $49,389 $49,868 $50,348 19.90.35 PROGRAMA \u00daNICO INTEGRAL OBESIDAD: ADICIONAL POR ACTIVIDAD F\u00cdSICA $16,047 $16,203 $16,358"
  },
  {
    "code": "19.90.46",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO POST PUIO",
    "price_hidden": "$49,389",
    "coseguro": "$49,868",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.47",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: M\u00d3DULO INICIO SP",
    "price_hidden": "$80,234",
    "coseguro": "$81,013",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.48",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: MODULO SEGUIMIENTO I SP",
    "price_hidden": "$80,234",
    "coseguro": "$81,013",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.49",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: MODULO SEGUIMIENTO II SP",
    "price_hidden": "$49,389",
    "coseguro": "$49,868",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.35",
    "description": "PROGRAMA \u00daNICO INTEGRAL OBESIDAD: ADICIONAL POR ACTIVIDAD F\u00cdSICA",
    "price_hidden": "$16,047",
    "coseguro": "$16,203",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.44",
    "description": "",
    "price_hidden": "$1,435,165",
    "coseguro": "$1,449,098",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "CIRUG\u00cdA BARI\u00c1TRICA: BY PASS G\u00c1STRICO EN Y DE ROUX (NO INCLUYE MATERIALES ESPEC\u00cdFICOS) - ANESTESIA NIVEL 7 + 75% $1,435,165 $1,449,098 $1,463,032"
  },
  {
    "code": "19.90.45",
    "description": "",
    "price_hidden": "$1,354,257",
    "coseguro": "$1,367,405",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "CIRUG\u00cdA BARI\u00c1TRICA: GASTRECTOM\u00cdA EN MANGA (SLEEVE) (NO INCLUYE MATERIALES ESPEC\u00cdFICOS) - ANESTESIA NIVEL 7 + 75% $1,354,257 $1,367,405 $1,380,553"
  },
  {
    "code": "19.90.51",
    "description": "INTERNACI\u00d3N - BY PASS G\u00c1STRICO EN Y DE ROUX",
    "price_hidden": "$541,753",
    "coseguro": "$547,013",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "INTERNACI\u00d3N - BY PASS G\u00c1STRICO EN Y DE ROUX $541,753 $547,013 $552,272 19.90.50 INTERNACI\u00d3N - GASTRECTOM\u00cdA EN MANGA (SLEEVE) $487,537 $492,270 $497,004 19.90.53 MODULO INSUMOS CIRUGIAS BARIATRICAS NUTRICI\u00d3N OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "19.90.50",
    "description": "INTERNACI\u00d3N - GASTRECTOM\u00cdA EN MANGA (SLEEVE)",
    "price_hidden": "$487,537",
    "coseguro": "$492,270",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "19.90.53",
    "description": "MODULO INSUMOS CIRUGIAS BARIATRICAS",
    "price_hidden": "por presupuesto",
    "coseguro": "por presupuesto",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "19.01.03",
    "description": "NUTRICIONISTA X SESION",
    "price_hidden": "$9,419",
    "coseguro": "$9,602",
    "bonos": "5",
    "source": "MEDICAS",
    "normativa": "NUTRICIONISTA X SESION  $9,419 $9,602 $9,785 19.01.04 SESION - 1ER. TRIMESTRE $9,419 $9,602 $9,785 19.01.02 PLAN ALIMENTARIO $12,918 $13,169 $13,420 42.50.03 PRIMERA ENTREVISTA NUTRICIONISTA $12,918 $13,169 $13,420 19.01.07 EDUCACI\u00d3N ALIMENTARIA NUTRICIONAL $12,918 $13,169 $13,420 KINESIOLOG\u00cdA OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "19.01.04",
    "description": "SESION - 1ER. TRIMESTRE",
    "price_hidden": "$9,419",
    "coseguro": "$9,602",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "19.01.02",
    "description": "PLAN ALIMENTARIO",
    "price_hidden": "$12,918",
    "coseguro": "$13,169",
    "bonos": "7",
    "source": "MEDICAS"
  },
  {
    "code": "42.50.03",
    "description": "PRIMERA ENTREVISTA NUTRICIONISTA",
    "price_hidden": "$12,918",
    "coseguro": "$13,169",
    "bonos": "7",
    "source": "MEDICAS"
  },
  {
    "code": "19.01.07",
    "description": "EDUCACI\u00d3N ALIMENTARIA NUTRICIONAL",
    "price_hidden": "$12,918",
    "coseguro": "$13,169",
    "bonos": "7",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.04",
    "description": "M\u00d3DULO DE ATENCI\u00d3N KIN\u00c9SICA INTEGRAL",
    "price_hidden": "$7,089",
    "coseguro": "$7,226",
    "bonos": "3",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO DE ATENCI\u00d3N KIN\u00c9SICA INTEGRAL  $7,089 $7,226 $7,364 25.01.06 M\u00d3DULO DE ATENCI\u00d3N KIN\u00c9SICA INTEGRAL A DOMICILIO  $2,121 $2,162 $2,204 TERAPIA OCUPACIONAL OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "25.01.06",
    "description": "M\u00d3DULO DE ATENCI\u00d3N KIN\u00c9SICA INTEGRAL A DOMICILIO",
    "price_hidden": "$2,121",
    "coseguro": "$2,162",
    "bonos": "1",
    "source": "MEDICAS"
  },
  {
    "code": "25.01.03",
    "description": "TERAPIA OCUPACIONAL X SESION",
    "price_hidden": "$9,419",
    "coseguro": "$9,602",
    "bonos": "5",
    "source": "MEDICAS",
    "normativa": "TERAPIA OCUPACIONAL X SESION  $9,419 $9,602 $9,785 25.90.72 ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - VALVA DE CODO $15,968 $16,278 $16,588"
  },
  {
    "code": "25.90.72",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - VALVA DE CODO",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.73",
    "description": "",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS",
    "normativa": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE MU\u00d1ECA Y DEDOS (POSICI\u00d3N FUNCIONAL) $15,968 $16,278 $16,588"
  },
  {
    "code": "25.90.74",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE MU\u00d1ECA",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS",
    "normativa": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE MU\u00d1ECA $15,968 $16,278 $16,588 25.90.75 ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE MU\u00d1ECA Y MCF PULGAR $15,968 $16,278 $16,588 25.90.76 ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N TMC PULGAR $15,968 $16,278 $16,588 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "25.90.75",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE MU\u00d1ECA Y MCF PULGAR",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.76",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N TMC PULGAR",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.77",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE DEDOS",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS",
    "normativa": "ELABORACI\u00d3N DE F\u00c9RULA EST\u00c1TICA - INMOVILIZACI\u00d3N DE DEDOS $15,968 $16,278 $16,588 25.90.78 ELABORACI\u00d3N DE F\u00c9RULA DIN\u00c1MICA POST TENORRAFIA TENDONES FLEX/EXT $15,968 $16,278 $16,588 25.90.79 ELABORACI\u00d3N DE F\u00c9RULA DIN\u00c1MICA DIGITALES INDIVIDUALES $15,968 $16,278 $16,588 25.90.80 ELABORACI\u00d3N DE F\u00c9RULA DIN\u00c1MICA BASE FIJA EN CARPO Y TRACCI\u00d3N DIGITAL $15,968 $16,278 $16,588"
  },
  {
    "code": "25.90.78",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA DIN\u00c1MICA POST TENORRAFIA TENDONES FLEX/EXT",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.79",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA DIN\u00c1MICA DIGITALES INDIVIDUALES",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.80",
    "description": "ELABORACI\u00d3N DE F\u00c9RULA DIN\u00c1MICA BASE FIJA EN CARPO Y TRACCI\u00d3N DIGITAL",
    "price_hidden": "$15,968",
    "coseguro": "$16,278",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.81",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA - TEST DE INTEGRACI\u00d3N VISO-MOTORA (VMI) DE KEITH BEERY Y NORMAN BUKTENICA $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.82",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA  BRUININKS OSERETSKY TEST OF MOTOR PROFICIENCY (DESARROLLO MOTOR) $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.83",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA - TEST DE DESARROLLO DE LA PERCEPCI\u00d3N VISUAL (MARIANNE FROSTIG) $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.84",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA - EVALUACI\u00d3N PEABODY DEVELOPMENTAL MOTOR SCALES (PDMS) (DESARROLLO MOTOR) $48,622 $49,566 $50,510 EVALUACI\u00d3N PEDI\u00c1TRICA - EVALUACI\u00d3N ESCALAS BAYLEY DE DESARROLLO INFANTIL"
  },
  {
    "code": "25.90.85",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "$48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.86",
    "description": "EVALUACI\u00d3N PEDI\u00c1TRICA - VINELAND ADAPTATIVE BEHAVIOR SCALES.",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA - VINELAND ADAPTATIVE BEHAVIOR SCALES. $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.87",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA - THE FUNCTIONAL INDEPENDENCE MEASURE FOR CHILDREN (WEEFIM). $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.88",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N PEDI\u00c1TRICA -  ESCALAS MCCARTHY DE APTITUDES Y PSICOMOTRICIDAD PARA NI\u00d1OS (MSCA) $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.89",
    "description": "EVALUACI\u00d3N TRAUMATOL\u00d3GICA - GONIOMETR\u00cdA, FUNCIONAL, OTRAS.",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N TRAUMATOL\u00d3GICA - GONIOMETR\u00cdA, FUNCIONAL, OTRAS. $48,622 $49,566 $50,510"
  },
  {
    "code": "25.90.90",
    "description": "",
    "price_hidden": "$48,622",
    "coseguro": "$49,566",
    "bonos": "11",
    "source": "MEDICAS",
    "normativa": "EVALUACI\u00d3N NEUROCOGNITIVA - BATER\u00cdA DE EVALUACIONES (MINI MENTAL STATE, L.O.T.C.A., A.D.A.S., A.C.E., INECO, FRONTAL SCREANING), OTRAS. $48,622 $49,566 $50,510 REHABILITACION NEUROL\u00d3GICA OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "31.01.02",
    "description": "AUDIOMETRIA",
    "price_hidden": "$10,464",
    "coseguro": "$10,667",
    "bonos": "4",
    "source": "MEDICAS",
    "normativa": "AUDIOMETRIA $10,464 $10,667 $10,870 31.01.09 IMPEDANCIOMETRIA $15,527 $15,829 $16,130 31.01.03 LOGOAUDIOMETRIA $10,464 $10,667 $10,870 31.50.02 OTOEMISIONES ACUSTICAS UNI O BILATERAL $24,303 $24,775 $25,247 31.01.04 PRUEBAS SUPRALIMINARES $10,464 $10,667 $10,870 42.50.04 PRIMERA ENTREVISTA FONOAUDIOLOGICA $12,918 $13,169 $13,420 25.01.04 REHABILITACION FONOAUDIOLOGICA $9,419 $9,602 $9,785 31.01.05 SELECCI\u00d3N DE OTOAMPLIFONOS $15,021 $15,313 $15,604 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales PSICOLOG\u00cdA  OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "31.01.09",
    "description": "IMPEDANCIOMETRIA",
    "price_hidden": "$15,527",
    "coseguro": "$15,829",
    "bonos": "4",
    "source": "MEDICAS"
  },
  {
    "code": "31.01.03",
    "description": "LOGOAUDIOMETRIA",
    "price_hidden": "$10,464",
    "coseguro": "$10,667",
    "bonos": "3",
    "source": "MEDICAS"
  },
  {
    "code": "31.50.02",
    "description": "OTOEMISIONES ACUSTICAS UNI O BILATERAL",
    "price_hidden": "$24,303",
    "coseguro": "$24,775",
    "bonos": "13",
    "source": "MEDICAS"
  },
  {
    "code": "31.01.04",
    "description": "PRUEBAS SUPRALIMINARES",
    "price_hidden": "$10,464",
    "coseguro": "$10,667",
    "bonos": "3",
    "source": "MEDICAS"
  },
  {
    "code": "42.50.04",
    "description": "PRIMERA ENTREVISTA FONOAUDIOLOGICA",
    "price_hidden": "$12,918",
    "coseguro": "$13,169",
    "bonos": "7",
    "source": "MEDICAS"
  },
  {
    "code": "25.01.04",
    "description": "REHABILITACION FONOAUDIOLOGICA",
    "price_hidden": "$9,419",
    "coseguro": "$9,602",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "31.01.05",
    "description": "SELECCI\u00d3N DE OTOAMPLIFONOS",
    "price_hidden": "$15,021",
    "coseguro": "$15,313",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "33.03.13",
    "description": "PRIMERA ENTREVISTA PSICOLOGICA",
    "price_hidden": "$12,918",
    "coseguro": "$13,169",
    "bonos": "7",
    "source": "MEDICAS",
    "normativa": "PRIMERA ENTREVISTA PSICOLOGICA $12,918 $13,169 $13,420 33.01.01 PSICOTERAPIA (por Sesi\u00f3n) $9,419 $9,602 $9,785 33.01.11 PRUEBAS PSICOMETRICAS  $8,074 $8,231 $8,387 33.01.12 PRUEBAS PROYECTIVAS -M\u00cdNIMO 4 TEST $16,865 $17,193 $17,520 33.03.03 ORIENTACION PARA PADRES DE NI\u00d1OS MENORES DE 17 A\u00d1OS $5,562 $5,670 $5,778"
  },
  {
    "code": "33.01.01",
    "description": "PSICOTERAPIA (por Sesi\u00f3n)",
    "price_hidden": "$9,419",
    "coseguro": "$9,602",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "33.01.11",
    "description": "PRUEBAS PSICOMETRICAS",
    "price_hidden": "$8,074",
    "coseguro": "$8,231",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "33.01.12",
    "description": "PRUEBAS PROYECTIVAS -M\u00cdNIMO 4 TEST",
    "price_hidden": "$16,865",
    "coseguro": "$17,193",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "33.03.03",
    "description": "ORIENTACION PARA PADRES DE NI\u00d1OS MENORES DE 17 A\u00d1OS",
    "price_hidden": "$5,562",
    "coseguro": "$5,670",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "42.50.02",
    "description": "PRIMERA ENTREVISTA PSICOPEDAGOGICA",
    "price_hidden": "$12,918",
    "coseguro": "$13,169",
    "bonos": "7",
    "source": "MEDICAS",
    "normativa": "PRIMERA ENTREVISTA PSICOPEDAGOGICA $12,918 $13,169 $13,420 33.90.01 PSICOPEDAGOGIA X SESION $9,419 $9,602 $9,785 33.90.03 PSICOPEDAGOGIA POR SESION FAMILIAR $5,562 $5,670 $5,778 33.90.11 PRUEBAS PSICOMETRICAS DE PSICOPEDAGOGIA  $8,074 $8,231 $8,387 33.90.12 PRUEBAS PROYECTIVAS DE PSICOPEDAGOGIA -M\u00cdNIMO 4 TEST- $16,865 $17,193 $17,520"
  },
  {
    "code": "33.90.01",
    "description": "PSICOPEDAGOGIA X SESION",
    "price_hidden": "$9,419",
    "coseguro": "$9,602",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "33.90.03",
    "description": "PSICOPEDAGOGIA POR SESION FAMILIAR",
    "price_hidden": "$5,562",
    "coseguro": "$5,670",
    "bonos": "5",
    "source": "MEDICAS"
  },
  {
    "code": "33.90.11",
    "description": "PRUEBAS PSICOMETRICAS DE PSICOPEDAGOGIA",
    "price_hidden": "$8,074",
    "coseguro": "$8,231",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "33.90.12",
    "description": "PRUEBAS PROYECTIVAS DE PSICOPEDAGOGIA -M\u00cdNIMO 4 TEST-",
    "price_hidden": "$16,865",
    "coseguro": "$17,193",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "25.90.50",
    "description": "M\u00d3DULO 1- REHABILITACION NEUROLOGICA ALTA COMPLEJIDAD",
    "price_hidden": "$8,240,000",
    "coseguro": "$8,320,000",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1- REHABILITACION NEUROLOGICA ALTA COMPLEJIDAD $8,240,000 $8,320,000 $8,400,000"
  },
  {
    "code": "25.90.51",
    "description": "",
    "price_hidden": "$9,270,000",
    "coseguro": "$9,360,000",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - REHABILITACION NEUROLOGICA ALTA COMPLEJIDAD CON ASISTENCIA MEDICA RESPIRATORIA $9,270,000 $9,360,000 $9,450,000 SUB-M\u00d3DULO - PRACTICAS COMPLEMENTARIAS Y AUXILIARES, MEDICAMENTOS E INSUMOS (MATERIAL DESCARTABLE: INCLUYE TODO EL MATERIAL DESCARTABLE NECESARIO PARA LA REALIZACI\u00d3N DE PRESTACIONES M\u00c9DICAS O DE ENFERMER\u00cdA)"
  },
  {
    "code": "25.90.52",
    "description": "INSUMOS (MATERIAL DESCARTABLE: INCLUYE TODO EL MATERIAL DESCARTABLE",
    "price_hidden": "$857,857",
    "coseguro": "$866,185",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": ""
  },
  {
    "code": "25.90.60",
    "description": "M\u00d3DULO 3 - REHABILITACI\u00d3N EN INTERNACI\u00d3N DE MEDIANA COMPLEJIDAD",
    "price_hidden": "$7,210,000",
    "coseguro": "$7,280,000",
    "bonos": "BPE",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - REHABILITACI\u00d3N EN INTERNACI\u00d3N DE MEDIANA COMPLEJIDAD $7,210,000 $7,280,000 $7,350,000 REHABILITACION CARDIO-PULMONAR OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "17.90.03",
    "description": "MODULO REHABILITACION CARDIOVASCULAR-PULMONAR",
    "price_hidden": "$65,976",
    "coseguro": "$66,616",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "MODULO REHABILITACION CARDIOVASCULAR-PULMONAR $65,976 $66,616 $67,257 PROGRAMA DE SALUD MENTAL OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "33.91.20",
    "description": "M\u00d3DULO ADMISI\u00d3N",
    "price_hidden": "$26,347",
    "coseguro": "$26,603",
    "bonos": "12",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO ADMISI\u00d3N $26,347 $26,603 $26,858 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "33.91.30",
    "description": "M\u00d3DULO AMBULATORIO INTENSIVO",
    "price_hidden": "$96,930",
    "coseguro": "$97,871",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO AMBULATORIO INTENSIVO $96,930 $97,871 $98,812 33.91.31 M\u00d3DULO AMBULATORIO DE SOST\u00c9N $74,400 $75,122 $75,845 33.91.16 CENTRO DE REHABILITACI\u00d3N PSICOSOCIAL - MEDIA JORNADA $19,277 $19,464 $19,651 33.91.08 CENTRO DE REHABILITACI\u00d3N PSICOSOCIAL - JORNADA COMPLETA $25,023 $25,266 $25,509 $22,847 $23,069 $23,291 $29,531 $29,818 $30,105 33.91.32 CENTRO DE D\u00cdA - MEDIA JORNADA - ADULTOS MAYORES $19,277 $19,464 $19,651 33.91.33 CENTRO DE D\u00cdA - JORNADA EXTENDIDA - ADULTOS MAYORES $25,023 $25,266 $25,509 43.90.60 HOSTALES $890,042 $898,683 $907,324 43.90.53 COMUNIDAD TERAP\u00c9UTICA - 1\u00b0 AL 3\u00b0 MES $890,042 $898,683 $907,324 43.90.54 COMUNIDAD TERAP\u00c9UTICA - 3\u00b0 AL 6\u00b0 MES $821,577 $829,554 $837,530 43.90.55 COMUNIDAD TERAP\u00c9UTICA - 6\u00b0 AL 12\u00b0 MES $753,113 $760,424 $767,736 43.90.64 COMUNIDAD TERAP\u00c9UTICA BUENOS AIRES $890,042 $898,683 $907,324 43.90.58 CENTRO DE NOCHE - CONTENCI\u00d3N FINES DE SEMANA $27,308 $27,573 $27,838 33.91.09 TALLERES DE HABILIDADES SOCIALES / INSERCI\u00d3N $12,430 $12,551 $12,671 33.91.10 TALLERES FAMILIARES $17,320 $17,489 $17,657 33.91.14  ACOMPA\u00d1ANTE TERAP\u00c9UTICO (AT) - - $8,469 33.91.34 EVALUACI\u00d3N NEUROCOGNITIVA (EN) $47,859 $48,323 $48,788 33.91.35 POST ALTA I PSM $34,056 $34,387 $34,718 33.91.36 POST ALTA II PSM $15,718 $15,871 $16,024 33.91.28 M\u00d3DULO ASISTENCIA EN SITUACIONES DE VIOLENCIA $66,918 $67,568 $68,218 33.91.29 M\u00d3DULO ASISTENCIA EN SITUACIONES DE VIOLENCIA -SEGUIMIENTO $13,838 $13,972 $14,107"
  },
  {
    "code": "33.91.31",
    "description": "M\u00d3DULO AMBULATORIO DE SOST\u00c9N",
    "price_hidden": "$74,400",
    "coseguro": "$75,122",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.16",
    "description": "CENTRO DE REHABILITACI\u00d3N PSICOSOCIAL - MEDIA JORNADA",
    "price_hidden": "$19,277",
    "coseguro": "$19,464",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.08",
    "description": "CENTRO DE REHABILITACI\u00d3N PSICOSOCIAL - JORNADA COMPLETA",
    "price_hidden": "$25,023",
    "coseguro": "$25,266",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.23",
    "description": "HOSPITAL DE DIA - MEDIA JORNADA",
    "price_hidden": "$22,847",
    "coseguro": "$23,069",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "HOSPITAL DE DIA - MEDIA JORNADA 33.91.22 HOSPITAL DE DIA - JORNADA COMPLETA PROGRAMA DE ATENCI\u00d3N A PERSONAS CON DEPENDENCIA O SEMIDEPENDENCIA (DEADOS) OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "33.91.22",
    "description": "HOSPITAL DE DIA - JORNADA COMPLETA",
    "price_hidden": "$29,531",
    "coseguro": "$29,818",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.32",
    "description": "CENTRO DE D\u00cdA - MEDIA JORNADA - ADULTOS MAYORES",
    "price_hidden": "$19,277",
    "coseguro": "$19,464",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.33",
    "description": "CENTRO DE D\u00cdA - JORNADA EXTENDIDA - ADULTOS MAYORES",
    "price_hidden": "$25,023",
    "coseguro": "$25,266",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "43.90.60",
    "description": "HOSTALES",
    "price_hidden": "$890,042",
    "coseguro": "$898,683",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "43.90.53",
    "description": "COMUNIDAD TERAP\u00c9UTICA - 1\u00b0 AL 3\u00b0 MES",
    "price_hidden": "$890,042",
    "coseguro": "$898,683",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "43.90.54",
    "description": "COMUNIDAD TERAP\u00c9UTICA - 3\u00b0 AL 6\u00b0 MES",
    "price_hidden": "$821,577",
    "coseguro": "$829,554",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "43.90.55",
    "description": "COMUNIDAD TERAP\u00c9UTICA - 6\u00b0 AL 12\u00b0 MES",
    "price_hidden": "$753,113",
    "coseguro": "$760,424",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "43.90.64",
    "description": "COMUNIDAD TERAP\u00c9UTICA BUENOS AIRES",
    "price_hidden": "$890,042",
    "coseguro": "$898,683",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "43.90.58",
    "description": "CENTRO DE NOCHE - CONTENCI\u00d3N FINES DE SEMANA",
    "price_hidden": "$27,308",
    "coseguro": "$27,573",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.09",
    "description": "TALLERES DE HABILIDADES SOCIALES / INSERCI\u00d3N",
    "price_hidden": "$12,430",
    "coseguro": "$12,551",
    "bonos": "6",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.10",
    "description": "TALLERES FAMILIARES",
    "price_hidden": "$17,320",
    "coseguro": "$17,489",
    "bonos": "8",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.14",
    "description": "ACOMPA\u00d1ANTE TERAP\u00c9UTICO (AT)",
    "price_hidden": "-",
    "coseguro": "-",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.34",
    "description": "EVALUACI\u00d3N NEUROCOGNITIVA (EN)",
    "price_hidden": "$47,859",
    "coseguro": "$48,323",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.35",
    "description": "POST ALTA I PSM",
    "price_hidden": "$34,056",
    "coseguro": "$34,387",
    "bonos": "OC",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.36",
    "description": "POST ALTA II PSM",
    "price_hidden": "$15,718",
    "coseguro": "$15,871",
    "bonos": "OC",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.28",
    "description": "M\u00d3DULO ASISTENCIA EN SITUACIONES DE VIOLENCIA",
    "price_hidden": "$66,918",
    "coseguro": "$67,568",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "33.91.29",
    "description": "M\u00d3DULO ASISTENCIA EN SITUACIONES DE VIOLENCIA -SEGUIMIENTO",
    "price_hidden": "$13,838",
    "coseguro": "$13,972",
    "bonos": "16",
    "source": "MEDICAS"
  },
  {
    "code": "43.96.01",
    "description": "M\u00d3DULO I: SUBSIDIO PARA DEPENDIENTES O SEMIDEPENDIENTES",
    "price_hidden": "$127,947",
    "coseguro": "$129,189",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO I: SUBSIDIO PARA DEPENDIENTES O SEMIDEPENDIENTES $127,947 $129,189 $130,432 43.90.02 M\u00d3DULO I: SUBSIDIO PARA DEPENDIENTES O SEMIDEPENDIENTES $102,358 $103,352 $104,345 43.96.03 M\u00d3DULO I: SUBSIDIO PARA DEPENDIENTES O SEMIDEPENDIENTES $74,636 $75,360 $76,085 41.02.01 M\u00d3DULO II: INTERNACI\u00d3N GERI\u00c1TRICA  $1,039,919 $1,050,015 $1,060,111 44.10.01 M\u00d3DULO III: INTERNACI\u00d3N GERI\u00c1TRICA - SALUD MENTAL  $1,464,674 $1,478,895 $1,493,115"
  },
  {
    "code": "43.90.02",
    "description": "M\u00d3DULO I: SUBSIDIO PARA DEPENDIENTES O SEMIDEPENDIENTES",
    "price_hidden": "$102,358",
    "coseguro": "$103,352",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "43.96.03",
    "description": "M\u00d3DULO I: SUBSIDIO PARA DEPENDIENTES O SEMIDEPENDIENTES",
    "price_hidden": "$74,636",
    "coseguro": "$75,360",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "41.02.01",
    "description": "M\u00d3DULO II: INTERNACI\u00d3N GERI\u00c1TRICA",
    "price_hidden": "$1,039,919",
    "coseguro": "$1,050,015",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "44.10.01",
    "description": "M\u00d3DULO III: INTERNACI\u00d3N GERI\u00c1TRICA - SALUD MENTAL",
    "price_hidden": "$1,464,674",
    "coseguro": "$1,478,895",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "78.09.01",
    "description": "",
    "price_hidden": "-",
    "coseguro": "-",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO IV: REINTEGRO DE GASTOS POR PRESTACI\u00d3N DE ACOMPA\u00d1ANTE TERAP\u00c9UTICO (VALOR POR HORA) - - $8,469 INTERNACI\u00d3N PSIQUI\u00c1TRICA OCT/25 NOV/25 DIC/25 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales MODULO INTERNACION SIQUIATRIA (EX MODULO AGUDO) - TRAMO 1 M\u00c1XIMO 20 DIAS $104,972 $105,992 $107,011 MODULO INTERNACION SIQUIATRIA (EX MODULO AGUDO) - TRAMO 2 M\u00c1XIMO 20 DIAS $87,628 $88,479 $89,330 MODULO INTERNACION SIQUIATRIA (EX MODULO AGUDO) - TRAMO 3 M\u00c1XIMO 20 DIAS $73,919 $74,637 $75,354 INTERNACION SIQUIATRICA DE LARGA DURACION (EX MODULO CRONICO) $94,105 $95,019 $95,932 MODULO REINTERNACION $58,008 $58,572 $59,135 INTERVENCION EN CRISIS  $32,421 $32,735 $33,050 9 Normas Servicio Psiquiatr\u00eda: Todos los valores son por d\u00eda excepto Intervenci\u00f3n en Crisis M\u00f3dulo Internaci\u00f3n Psiqui\u00e1trica: (Ex M\u00f3dulo Agudo): Es aplicable en aquellos pacientes que no registren Internaci\u00f3n Psiqui\u00e1trica en Prestadores del Sistema en los \u00faltimos 12 meses. Tiene un m\u00e1ximo de 60 dias dividido en 3 tramos de 20 dias cada uno. INTERNACI\u00d3N PSIQUI\u00c1TRICA - DPTO ROSARIO OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "Normas Servicio",
    "description": "Psiquiatr\u00eda:",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "Todos los valores",
    "description": "son por d\u00eda excepto Intervenci\u00f3n en Crisis",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "M\u00f3dulo Internaci\u00f3n",
    "description": "Psiqui\u00e1trica: (Ex M\u00f3dulo Agudo): Es aplicable en aquellos pacientes que no registren",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "Internaci\u00f3n Psiqui\u00e1trica",
    "description": "en Prestadores del Sistema en los \u00faltimos 12 meses.",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "Tiene un m\u00e1ximo",
    "description": "de 60 dias dividido en 3 tramos de 20 dias cada uno.",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "33.30.02",
    "description": "MODULO I - DE 1 A 15 DIAS DE INTERNACION",
    "price_hidden": "$104,972",
    "coseguro": "$105,992",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "MODULO I - DE 1 A 15 DIAS DE INTERNACION $104,972 $105,992 $107,011 33.30.03 MODULO II - DE 1 A 16 DIAS Y HASTA 30 DIAS DE INTERNACION $97,656 $98,604 $99,553 FERTILIZACI\u00d3N ASISTIDA - BAJA COMPLEJIDAD OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "33.30.03",
    "description": "MODULO II - DE 1 A 16 DIAS Y HASTA 30 DIAS DE INTERNACION",
    "price_hidden": "$97,656",
    "coseguro": "$98,604",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.01",
    "description": "M\u00d3DULO INDUCCI\u00d3N DE OVULACI\u00d3N (MONITOREO ECOGR\u00c1FICO Y HORMONAL)",
    "price_hidden": "$101,227",
    "coseguro": "$102,210",
    "bonos": "21",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO INDUCCI\u00d3N DE OVULACI\u00d3N (MONITOREO ECOGR\u00c1FICO Y HORMONAL) $101,227 $102,210 $103,192 06.90.02 M\u00d3DULO INSEMINACI\u00d3N ARTIFICIAL INTRA UTERINA $182,218 $183,987 $185,756 06.90.10 PUNCION BIOPSIA TESTICULAR (Programa Fertilidad) $250,475 $252,907 $255,339 06.90.11 SONOHISTEROGRAFIA $120,207 $121,374 $122,541 06.90.12 MONITOREO FOLICULAR $39,623 $40,008 $40,393 06.90.13 M\u00d3DULO HORMONAL PARA FERTILIZACION ASISTIDA - TECNICA RAPIDA $116,478 $117,609 $118,740 06.90.14 MONITOREO ENDOMETRIAL $39,623 $40,008 $40,393 24 20 24 20 FERTILIZACI\u00d3N ASISTIDA - ALTA COMPLEJIDAD"
  },
  {
    "code": "06.90.02",
    "description": "M\u00d3DULO INSEMINACI\u00d3N ARTIFICIAL INTRA UTERINA",
    "price_hidden": "$182,218",
    "coseguro": "$183,987",
    "bonos": "37",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.10",
    "description": "PUNCION BIOPSIA TESTICULAR (Programa Fertilidad)",
    "price_hidden": "$250,475",
    "coseguro": "$252,907",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.11",
    "description": "SONOHISTEROGRAFIA",
    "price_hidden": "$120,207",
    "coseguro": "$121,374",
    "bonos": "24",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.12",
    "description": "MONITOREO FOLICULAR",
    "price_hidden": "$39,623",
    "coseguro": "$40,008",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.13",
    "description": "M\u00d3DULO HORMONAL PARA FERTILIZACION ASISTIDA - TECNICA RAPIDA",
    "price_hidden": "$116,478",
    "coseguro": "$117,609",
    "bonos": "24",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.14",
    "description": "MONITOREO ENDOMETRIAL",
    "price_hidden": "$39,623",
    "coseguro": "$40,008",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.03",
    "description": "M\u00d3DULO FIV / ICSI",
    "price_hidden": "$1,505,853",
    "coseguro": "$1,520,473",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO FIV / ICSI $1,505,853 $1,520,473 $1,535,093 06.90.04 M\u00d3DULO CONGELACI\u00d3N + CRIOPRESERVACI\u00d3N DE EMBRIONES $283,445 $286,197 $288,949 06.90.05 M\u00d3DULO DESCONGELACI\u00d3N + TRANSFERENCIA DE EMBRIONES $384,672 $388,406 $392,141 06.90.16 VITRIFICACI\u00d3N DE \u00d3VULOS $1,431,673 $1,445,573 $1,459,473 06.90.06 PROVISION DE SEMEN DE BANCO $364,817 $368,359 $371,901 06.90.07 OVOCITOS FRESCOS $911,091 $919,936 $928,782 06.90.08 ESPERMOGRAMA BIOLOGICO $30,851 $31,151 $31,451 06.90.09 OVOCITOS DE BANCO $303,680 $306,629 $309,577 06.90.17 VITRIFICACI\u00d3N DE SEMEN $251,194 $253,633 $256,072 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales M\u00d3DULO AUDITORIAS DE PROGRAMAS NOV/25 DIC/25"
  },
  {
    "code": "06.90.04",
    "description": "M\u00d3DULO CONGELACI\u00d3N + CRIOPRESERVACI\u00d3N DE EMBRIONES",
    "price_hidden": "$283,445",
    "coseguro": "$286,197",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.05",
    "description": "M\u00d3DULO DESCONGELACI\u00d3N + TRANSFERENCIA DE EMBRIONES",
    "price_hidden": "$384,672",
    "coseguro": "$388,406",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.16",
    "description": "VITRIFICACI\u00d3N DE \u00d3VULOS",
    "price_hidden": "$1,431,673",
    "coseguro": "$1,445,573",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.06",
    "description": "PROVISION DE SEMEN DE BANCO",
    "price_hidden": "$364,817",
    "coseguro": "$368,359",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.07",
    "description": "OVOCITOS FRESCOS",
    "price_hidden": "$911,091",
    "coseguro": "$919,936",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.08",
    "description": "ESPERMOGRAMA BIOLOGICO",
    "price_hidden": "$30,851",
    "coseguro": "$31,151",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.09",
    "description": "OVOCITOS DE BANCO",
    "price_hidden": "$303,680",
    "coseguro": "$306,629",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "06.90.17",
    "description": "VITRIFICACI\u00d3N DE SEMEN",
    "price_hidden": "$251,194",
    "coseguro": "$253,633",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.41",
    "description": "",
    "price_hidden": "$11,909",
    "coseguro": "$12,025",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1B - ASISTENCIA INTENSIVA PEDIATRICA DOMICILIARIA PARA PACIENTES COMPLEJOS MENORES DE 16 A\u00d1OS - CONTROL MEDICO $11,909 $12,025 $12,141"
  },
  {
    "code": "38.91.41",
    "description": "",
    "price_hidden": "$14,887",
    "coseguro": "$15,031",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1B - ASISTENCIA INTENSIVA PEDIATRICA DOMICILIARIA PARA PACIENTES COMPLEJOS MENORES DE 16 A\u00d1OS - CONTROL MEDICO $14,887 $15,031 $15,176 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "o del afiliado",
    "description": "o instituci\u00f3n se adicionar\u00e1 al valor del m\u00f3dulo un 20%",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.10",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - CONTROL MEDICO PROGRAMADO $9,924 $10,021 $10,117"
  },
  {
    "code": "38.90.11",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - CONTROL MEDICO ADICIONAL $9,924 $10,021 $10,117"
  },
  {
    "code": "38.90.12",
    "description": "",
    "price_hidden": "$4,862",
    "coseguro": "$4,909",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - VISITA ENFERMERIA $4,862 $4,909 $4,956"
  },
  {
    "code": "38.90.13",
    "description": "",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL MODULO 1A $426,263 $430,401 $434,540"
  },
  {
    "code": "38.90.15",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - CONTROL MEDICO ADICIONAL $9,924 $10,021 $10,117"
  },
  {
    "code": "38.90.17",
    "description": "",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784"
  },
  {
    "code": "38.90.16",
    "description": "",
    "price_hidden": "$4,862",
    "coseguro": "$4,909",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - CONTROL ENFERMERIA $4,862 $4,909 $4,956"
  },
  {
    "code": "38.90.14",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - CONTROL MEDICO PROGRAMADO $9,924 $10,021 $10,117 TOTAL MODULO 2 $277,868 $280,565 $283,263"
  },
  {
    "code": "38.90.18",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - CUIDADOS DE ENFERMER\u00cdA CON CONTROL MEDICO - CONTROL MEDICO PROGRAMADO $9,924 $10,021 $10,117"
  },
  {
    "code": "38.90.19",
    "description": "",
    "price_hidden": "$4,862",
    "coseguro": "$4,909",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - CUIDADOS DE ENFERMER\u00cdA CON CONTROL MEDICO - CONTROL ENFERMERIA $4,862 $4,909 $4,956"
  },
  {
    "code": "38.90.20",
    "description": "",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - CUIDADOS DE ENFERMER\u00cdA CON CONTROL MEDICO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL M\u00d3DULO 3 $307,170 $310,152 $313,134"
  },
  {
    "code": "38.90.21",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - CONTROL MEDICO PROGRAMADO $9,924 $10,021 $10,117"
  },
  {
    "code": "38.90.22",
    "description": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO \u2013 SESION",
    "price_hidden": "$8,932",
    "coseguro": "$9,019",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO \u2013 SESION $8,932 $9,019 $9,105"
  },
  {
    "code": "38.90.23",
    "description": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - GASTOS FIJOS POR DIA",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL MODULO 4A $228,800 $231,021 $233,243 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "38.90.42",
    "description": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - CONTROL M\u00c9DICO",
    "price_hidden": "$11,909",
    "coseguro": "$12,025",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - CONTROL M\u00c9DICO $11,909 $12,025 $12,141"
  },
  {
    "code": "38.80.49",
    "description": "",
    "price_hidden": "$8,932",
    "coseguro": "$9,019",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - KINESIOLOG\u00cdA O TERAPIA OCUPACIONAL $8,932 $9,019 $9,105"
  },
  {
    "code": "38.90.54",
    "description": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - GASTOS FIJOS POR D\u00cdA",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - GASTOS FIJOS POR D\u00cdA $2,731 $2,757 $2,784 TOTAL MODULO 4B $61,290 $61,885 $62,480"
  },
  {
    "code": "38.90.43",
    "description": "M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA - CONTROL M\u00c9DICO",
    "price_hidden": "$11,909",
    "coseguro": "$12,025",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA - CONTROL M\u00c9DICO $11,909 $12,025 $12,141"
  },
  {
    "code": "38.90.53",
    "description": "M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA - GASTOS FIJOS",
    "price_hidden": "$6,932",
    "coseguro": "$6,999",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA - GASTOS FIJOS $6,932 $6,999 $7,066 TOTAL MODULO 4C $18,841 $19,024 $19,207"
  },
  {
    "code": "38.90.24",
    "description": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - CONTROL ENFERMERIA",
    "price_hidden": "$4,862",
    "coseguro": "$4,909",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - CONTROL ENFERMERIA $4,862 $4,909 $4,956"
  },
  {
    "code": "38.90.25",
    "description": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - GASTOS FIJOS POR DIA",
    "price_hidden": "$1,489",
    "coseguro": "$1,503",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - GASTOS FIJOS POR DIA $1,489 $1,503 $1,518 TOTAL SUBM\u00d3DULO 5 $190,516 $192,366 $194,215"
  },
  {
    "code": "38.90.26",
    "description": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - SESION",
    "price_hidden": "$6,947",
    "coseguro": "$7,015",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - SESION $6,947 $7,015 $7,082"
  },
  {
    "code": "38.90.27",
    "description": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA",
    "price_hidden": "$1,489",
    "coseguro": "$1,503",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA $1,489 $1,503 $1,518 TOTAL SUBM\u00d3DULO 6A $183,602 $185,385 $187,167"
  },
  {
    "code": "38.90.28",
    "description": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - SESION",
    "price_hidden": "$6,947",
    "coseguro": "$7,015",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - SESION $6,947 $7,015 $7,082"
  },
  {
    "code": "38.90.29",
    "description": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA",
    "price_hidden": "$1,489",
    "coseguro": "$1,503",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA $1,489 $1,503 $1,518 TOTAL SUBM\u00d3DULO 6B $128,025 $129,268 $130,511"
  },
  {
    "code": "38.90.30",
    "description": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 4 A 8 HS DIARIAS - VALOR HORA",
    "price_hidden": "$3,869",
    "coseguro": "$3,907",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 4 A 8 HS DIARIAS - VALOR HORA $3,869 $3,907 $3,945"
  },
  {
    "code": "38.90.31",
    "description": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 12 A 16 HS DIARIAS - VALOR HORA",
    "price_hidden": "$3,373",
    "coseguro": "$3,406",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 12 A 16 HS DIARIAS - VALOR HORA $3,373 $3,406 $3,439"
  },
  {
    "code": "38.90.44",
    "description": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 1 A 3 HS DIARIAS - VALOR HORA",
    "price_hidden": "$4,219",
    "coseguro": "$4,260",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 1 A 3 HS DIARIAS - VALOR HORA $4,219 $4,260 $4,301"
  },
  {
    "code": "38.90.34",
    "description": "",
    "price_hidden": "$7,443",
    "coseguro": "$7,516",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 9 - ADICIONAL ASISTENCIA SICOSOCIAL - VALOR HORARIO P/PROFESIONAL $7,443 $7,516 $7,588"
  },
  {
    "code": "38.90.35",
    "description": "SUBM\u00d3DULO 9 - ADICIONAL ASISTENCIA SICOSOCIAL - GASTOS FIJOS POR DIA",
    "price_hidden": "$1,489",
    "coseguro": "$1,503",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 9 - ADICIONAL ASISTENCIA SICOSOCIAL - GASTOS FIJOS POR DIA $1,489 $1,503 $1,518 TOTAL SUBM\u00d3DULO 9 $104,207 $105,218 $106,230"
  },
  {
    "code": "38.90.45",
    "description": "M\u00d3DULO 10 - INSUMOS O PR\u00c1CTICAS ADICIONALES seg\u00fan",
    "price_hidden": "presupuesto",
    "coseguro": "seg\u00fan presupuesto",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 10 - INSUMOS O PR\u00c1CTICAS ADICIONALES ASISTENCIA DOMICILIARIA PEDIATRICA OCT/25 NOV/25 DIC/25 COSEGUROS"
  },
  {
    "code": "38.90.47",
    "description": "",
    "price_hidden": "$4,862",
    "coseguro": "$4,909",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1B - ASISTENCIA INTENSIVA PEDIATRICA DOMICILIARIA PARA PACIENTES COMPLEJOS MENORES DE 16 A\u00d1OS - CONTROL ENFERMER\u00cdA - VALOR HORA $4,862 $4,909 $4,956"
  },
  {
    "code": "38.90.48",
    "description": "",
    "price_hidden": "$2,729",
    "coseguro": "$2,756",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1B - ASISTENCIA INTENSIVA PEDIATRICA DOMICILIARIA PARA PACIENTES COMPLEJOS MENORES DE 16 A\u00d1OS - GASTOS FIJOS POR D\u00cdA $2,729 $2,756 $2,782 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales CUIDADOS PALIATIVOS OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "38.90.37",
    "description": "M\u00d3DULO 1",
    "price_hidden": "$18,322",
    "coseguro": "$18,500",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1 $18,322 $18,500 $18,678 TOTAL M\u00d3DULO 1 $549,661 $554,998 $560,334 38.90.38 M\u00d3DULO 2  $27,483 $27,750 $28,017 TOTAL M\u00d3DULO 2 $824,492 $832,497 $840,501 38.90.39 M\u00d3DULO 3 $42,751 $43,166 $43,582 TOTAL M\u00d3DULO 3 $1,282,543 $1,294,995 $1,307,447 38.90.40 M\u00d3DULO DOLOR ONCOL\u00d3GICO AMBULATORIO $12,215 $12,333 $12,452 TOTAL M\u00d3DULO  $366,441 $369,998 $373,556 ASISTENCIA DOMICILIARIA PARA CUIDAD AUT\u00d3NOMA DE BUENOS AIRES OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "38.90.38",
    "description": "M\u00d3DULO 2",
    "price_hidden": "$27,483",
    "coseguro": "$27,750",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.39",
    "description": "M\u00d3DULO 3",
    "price_hidden": "$42,751",
    "coseguro": "$43,166",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.90.40",
    "description": "M\u00d3DULO DOLOR ONCOL\u00d3GICO AMBULATORIO",
    "price_hidden": "$13,436",
    "coseguro": "$13,567",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.10",
    "description": "",
    "price_hidden": "$13,398",
    "coseguro": "$13,528",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - CONTROL MEDICO PROGRAMADO $13,398 $13,528 $13,658"
  },
  {
    "code": "38.91.11",
    "description": "",
    "price_hidden": "$13,398",
    "coseguro": "$13,528",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - CONTROL MEDICO ADICIONAL $13,398 $13,528 $13,658"
  },
  {
    "code": "38.91.12",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - VISITA ENFERMERIA $9,924 $10,021 $10,117"
  },
  {
    "code": "38.91.13",
    "description": "",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1A - ASISTENCIA INTENSIVA DE CUIDADOS EN DOMICILIO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL MODULO 1A $647,611 $653,899 $660,186"
  },
  {
    "code": "38.91.14",
    "description": "",
    "price_hidden": "$13,398",
    "coseguro": "$13,528",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - CONTROL MEDICO PROGRAMADO $13,398 $13,528 $13,658"
  },
  {
    "code": "38.91.15",
    "description": "",
    "price_hidden": "$13,398",
    "coseguro": "$13,528",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - CONTROL MEDICO ADICIONAL $13,398 $13,528 $13,658"
  },
  {
    "code": "38.91.16",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO \u2013 CONTROL ENFERMERIA $9,924 $10,021 $10,117"
  },
  {
    "code": "38.91.17",
    "description": "",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 2 - ASISTENCIA ESTANDAR DE CUIDADOS EN DOMICILIO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL MODULO 2 $328,510 $331,699 $334,889"
  },
  {
    "code": "38.91.18",
    "description": "",
    "price_hidden": "$13,398",
    "coseguro": "$13,528",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - CUIDADOS DE ENFERMER\u00cdA CON CONTROL MEDICO - CONTROL MEDICO PROGRAMADO $13,398 $13,528 $13,658"
  },
  {
    "code": "38.91.19",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - CUIDADOS DE ENFERMER\u00cdA CON CONTROL MEDICO - CONTROL ENFERMERIA $9,924 $10,021 $10,117"
  },
  {
    "code": "38.91.20",
    "description": "",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 3 - CUIDADOS DE ENFERMER\u00cdA CON CONTROL MEDICO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL M\u00d3DULO 3 $486,835 $491,562 $496,288 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "38.91.21",
    "description": "",
    "price_hidden": "$12,406",
    "coseguro": "$12,526",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - CONTROL MEDICO PROGRAMADO $12,406 $12,526 $12,646"
  },
  {
    "code": "38.91.22",
    "description": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - SESION",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - SESION $9,924 $10,021 $10,117 38.91.23 M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - GASTOS FIJOS POR DIA $2,731 $2,757 $2,784 TOTAL MODULO 4A $250,634 $253,067 $255,500 38.91.44 MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - CONTROL M\u00c9DICO $12,406 $12,526 $12,646"
  },
  {
    "code": "38.91.23",
    "description": "M\u00d3DULO 4A - REHABILITACI\u00d3N CON CONTROL MEDICO - GASTOS FIJOS POR DIA",
    "price_hidden": "$2,731",
    "coseguro": "$2,757",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.44",
    "description": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - CONTROL M\u00c9DICO",
    "price_hidden": "$12,406",
    "coseguro": "$12,526",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.45",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - KINESIOLOG\u00cdA O TERAPIA OCUPACIONAL $9,924 $10,021 $10,117"
  },
  {
    "code": "38.91.46",
    "description": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - GASTOS FIJOS POR D\u00cdA",
    "price_hidden": "$3,970",
    "coseguro": "$4,008",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "MODULO 4B - SOST\u00c9N CR\u00d3NICO EN DOMICILIO - GASTOS FIJOS POR D\u00cdA $3,970 $4,008 $4,047 TOTAL MODULO 4B $71,952 $72,651 $73,349 38.91.47 M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA - CONTROL M\u00c9DICO $12,406 $12,526 $12,646 38.91.48 M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA \u2013 GASTOS FIJOS POR D\u00cdA $3,970 $4,008 $4,047 TOTAL MODULO 4C $16,375 $16,534 $16,693"
  },
  {
    "code": "38.91.47",
    "description": "M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA - CONTROL M\u00c9DICO",
    "price_hidden": "$12,406",
    "coseguro": "$12,526",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.48",
    "description": "M\u00d3DULO 4C - VISITA M\u00c9DICA PLANIFICADA \u2013 GASTOS FIJOS POR D\u00cdA",
    "price_hidden": "$3,970",
    "coseguro": "$4,008",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.24",
    "description": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - CONTROL ENFERMERIA",
    "price_hidden": "$4,962",
    "coseguro": "$5,010",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - CONTROL ENFERMERIA $4,962 $5,010 $5,059"
  },
  {
    "code": "38.91.25",
    "description": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - GASTOS FIJOS POR DIA",
    "price_hidden": "$1,489",
    "coseguro": "$1,503",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 5 - PRACTICAS ADICIONALES DE ENFERMERIA - GASTOS FIJOS POR DIA $1,489 $1,503 $1,518 TOTAL SUBM\u00d3DULO 5 $193,527 $195,405 $197,284 38.91.26 SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - SESION $9,924 $10,021 $10,117"
  },
  {
    "code": "38.91.26",
    "description": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - SESION",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.27",
    "description": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA",
    "price_hidden": "$1,489",
    "coseguro": "$1,503",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 6A - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA $1,489 $1,503 $1,518 TOTAL SUBM\u00d3DULO 6A $140,815 $142,182 $143,549 38.91.28 SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - SESION $6,538 $6,601 $6,665"
  },
  {
    "code": "38.91.28",
    "description": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - SESION",
    "price_hidden": "$6,538",
    "coseguro": "$6,601",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.29",
    "description": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA",
    "price_hidden": "$746",
    "coseguro": "$753",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 6B - ADICIONAL ASISTENCIA KINESIO / FONO - GASTOS FIJOS POR DIA $746 $753 $760 TOTAL SUBM\u00d3DULO 6B $58,390 $58,956 $59,523 38.91.30 SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 4 A 8 HS DIARIAS - VALOR HORA $8,932 $9,019 $9,105 38.91.31 SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 12 A 16 HS DIARIAS - VALOR HORA $9,924 $10,021 $10,117 38.91.49 SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 1 A 3 HS DIARIAS - VALOR HORA $4,219 $4,260 $4,301"
  },
  {
    "code": "38.91.30",
    "description": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 4 A 8 HS DIARIAS - VALOR HORA",
    "price_hidden": "$8,932",
    "coseguro": "$9,019",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.31",
    "description": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 12 A 16 HS DIARIAS - VALOR HORA",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.49",
    "description": "SUBM\u00d3DULO 7 - ADICIONAL ENFERMERIA - 1 A 3 HS DIARIAS - VALOR HORA",
    "price_hidden": "$4,219",
    "coseguro": "$4,260",
    "bonos": "OI",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.34",
    "description": "",
    "price_hidden": "$6,660",
    "coseguro": "$6,724",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 9 - ADICIONAL ASISTENCIA SICOSOCIAL - VALOR HORARIO P/PROFESIONAL $6,660 $6,724 $6,789"
  },
  {
    "code": "38.91.35",
    "description": "SUBM\u00d3DULO 9 - ADICIONAL ASISTENCIA SICOSOCIAL - GASTOS FIJOS POR DIA",
    "price_hidden": "$746",
    "coseguro": "$753",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "SUBM\u00d3DULO 9 - ADICIONAL ASISTENCIA SICOSOCIAL - GASTOS FIJOS POR DIA $746 $753 $760 TOTAL SUBM\u00d3DULO 9 $75,649 $76,384 $77,118 38.91.50 M\u00d3DULO 10 - INSUMOS O PR\u00c1CTICAS ADICIONALES ASISTENCIA DOMICILIARIA PEDIATRICA PARA CIUDAD AUT\u00d3NOMA DE BUENOS AIRES OCT/25 NOV/25 DIC/25 COSEGUROS"
  },
  {
    "code": "38.91.50",
    "description": "M\u00d3DULO 10 - INSUMOS O PR\u00c1CTICAS ADICIONALES seg\u00fan",
    "price_hidden": "presupuesto",
    "coseguro": "seg\u00fan presupuesto",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "ASISTENCIA",
    "description": "DOMICILIARIA PEDIATRICA PARA CIUDAD AUT\u00d3NOMA DE BUENOS AIRES",
    "price_hidden": "OCT/25",
    "coseguro": "NOV/25",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.42",
    "description": "",
    "price_hidden": "$9,924",
    "coseguro": "$10,021",
    "bonos": "OI",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1B - ASISTENCIA INTENSIVA PEDIATRICA DOMICILIARIA PARA PACIENTES COMPLEJOS MENORES DE 16 A\u00d1OS - CONTROL ENFERMER\u00cdA - VALOR HORA $9,924 $10,021 $10,117"
  },
  {
    "code": "38.91.43",
    "description": "",
    "price_hidden": "$3,970",
    "coseguro": "$4,008",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1B - ASISTENCIA INTENSIVA PEDIATRICA DOMICILIARIA PARA PACIENTES COMPLEJOS MENORES DE 16 A\u00d1OS - GASTOS FIJOS POR D\u00cdA $3,970 $4,008 $4,047 CUIDADOS PALIATIVOS CIUDAD AUTONOMA DE BUENOS AIRES OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "38.91.38",
    "description": "M\u00d3DULO 1",
    "price_hidden": "$21,376",
    "coseguro": "$21,583",
    "bonos": "",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1 $21,376 $21,583 $21,791 TOTAL M\u00d3DULO 1 $641,271 $647,497 $653,723 38.91.39 M\u00d3DULO 2  $30,537 $30,833 $31,130 TOTAL M\u00d3DULO 2 $916,102 $924,996 $933,890 38.91.40 M\u00d3DULO 3 $51,912 $52,416 $52,920 TOTAL M\u00d3DULO 3 $1,557,373 $1,572,494 $1,587,614 38.90.40 M\u00d3DULO DOLOR ONCOL\u00d3GICO AMBULATORIO $13,436 $13,567 $13,697 TOTAL M\u00d3DULO  $403,085 $406,998 $410,912 OXIGENOTERAPIA  - VENTILACI\u00d3N DOMICILIARIA OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "38.91.39",
    "description": "M\u00d3DULO 2",
    "price_hidden": "$30,537",
    "coseguro": "$30,833",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.91.40",
    "description": "M\u00d3DULO 3",
    "price_hidden": "$51,912",
    "coseguro": "$52,416",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.50",
    "description": "MOD1.A-LOC TUBO OXIG MEDICINAL - INTERIOR",
    "price_hidden": "$72,608",
    "coseguro": "$73,313",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "MOD1.A-LOC TUBO OXIG MEDICINAL - INTERIOR $72,608 $73,313 $74,017 43.07.51 MOD1.A-LOC TUBO OXIG MEDICINAL \u2013 SANTA FE Y ROSARIO $62,727 $63,336 $63,945 43.07.52 MOD1.B-REC TUBO OXIG MEDICINAL - INTERIOR $76,085 $76,824 $77,562 43.07.53 MOD1.B-REC TUBO OXIG MEDICINAL - SANTA FE Y ROSARIO $65,934 $66,574 $67,214 43.07.54 MOD2.A-LOC SIST O2 LIQ C/MOCH - INTERIOR $574,055 $579,628 $585,201 43.07.55 MOD2.A-LOC SIST O2 LIQ C/MOCH - SANTA FE Y ROSARIO $487,595 $492,328 $497,062 43.07.56 MOD2.B-REC SIST O2 LIQ RESERVORIO - INTERIOR $88,705 $89,566 $90,427 43.07.57 MOD2.B-REC SIST O2 LIQ RESERVORIO - SANTA FE Y ROSARIO $88,705 $89,566 $90,427 43.07.58 MOD3.A-LOC CONCENT O2 - INTERIOR $53,300 $53,817 $54,335 43.07.59 MOD3.A-LOC CONCENT O2 - SANTA FE Y ROSARIO $41,844 $42,250 $42,656 43.07.60 MOD3.B-LOC CONCENT O2 ALTO FLUJO - INTERIOR $191,149 $193,005 $194,861 43.07.61 MOD3.B-LOC CONCENT O2 ALTO FLUJO - SANTA FE Y ROSARIO $169,597 $171,243 $172,890 43.07.62 MOD3.C-LOC CONCENT O2 C/TUB OX BUP - INTERIOR $109,342 $110,404 $111,465 43.07.63 MOD3.C-LOC CONCENT O2 C/TUB OX BUP - SANTA FE Y ROSARIO $93,226 $94,131 $95,036 43.07.64 MOD3.D-LOC CONCENT O2 PORTATIL - INTERIOR $465,670 $470,191 $474,712 43.07.65 MOD3.D-LOC CONCENT O2 PORTATIL - SANTA FE Y ROSARIO $435,677 $439,907 $444,137 43.07.66 MOD4.A-LOC MOCHILA ULTRALIV TRANSP - INTERIOR $19,288 $19,476 $19,663 43.07.67 MOD4.A-LOC MOCHILA ULTRALIV TRANSP - SANTA FE Y ROSARIO $17,522 $17,692 $17,863 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "43.07.51",
    "description": "MOD1.A-LOC TUBO OXIG MEDICINAL \u2013 SANTA FE Y ROSARIO",
    "price_hidden": "$62,727",
    "coseguro": "$63,336",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.52",
    "description": "MOD1.B-REC TUBO OXIG MEDICINAL - INTERIOR",
    "price_hidden": "$76,085",
    "coseguro": "$76,824",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.53",
    "description": "MOD1.B-REC TUBO OXIG MEDICINAL - SANTA FE Y ROSARIO",
    "price_hidden": "$65,934",
    "coseguro": "$66,574",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.54",
    "description": "MOD2.A-LOC SIST O2 LIQ C/MOCH - INTERIOR",
    "price_hidden": "$574,055",
    "coseguro": "$579,628",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.55",
    "description": "MOD2.A-LOC SIST O2 LIQ C/MOCH - SANTA FE Y ROSARIO",
    "price_hidden": "$487,595",
    "coseguro": "$492,328",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.56",
    "description": "MOD2.B-REC SIST O2 LIQ RESERVORIO - INTERIOR",
    "price_hidden": "$88,705",
    "coseguro": "$89,566",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.57",
    "description": "MOD2.B-REC SIST O2 LIQ RESERVORIO - SANTA FE Y ROSARIO",
    "price_hidden": "$88,705",
    "coseguro": "$89,566",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.58",
    "description": "MOD3.A-LOC CONCENT O2 - INTERIOR",
    "price_hidden": "$53,300",
    "coseguro": "$53,817",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.59",
    "description": "MOD3.A-LOC CONCENT O2 - SANTA FE Y ROSARIO",
    "price_hidden": "$41,844",
    "coseguro": "$42,250",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.60",
    "description": "MOD3.B-LOC CONCENT O2 ALTO FLUJO - INTERIOR",
    "price_hidden": "$191,149",
    "coseguro": "$193,005",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.61",
    "description": "MOD3.B-LOC CONCENT O2 ALTO FLUJO - SANTA FE Y ROSARIO",
    "price_hidden": "$169,597",
    "coseguro": "$171,243",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.62",
    "description": "MOD3.C-LOC CONCENT O2 C/TUB OX BUP - INTERIOR",
    "price_hidden": "$109,342",
    "coseguro": "$110,404",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.63",
    "description": "MOD3.C-LOC CONCENT O2 C/TUB OX BUP - SANTA FE Y ROSARIO",
    "price_hidden": "$93,226",
    "coseguro": "$94,131",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.64",
    "description": "MOD3.D-LOC CONCENT O2 PORTATIL - INTERIOR",
    "price_hidden": "$465,670",
    "coseguro": "$470,191",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.65",
    "description": "MOD3.D-LOC CONCENT O2 PORTATIL - SANTA FE Y ROSARIO",
    "price_hidden": "$435,677",
    "coseguro": "$439,907",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.66",
    "description": "MOD4.A-LOC MOCHILA ULTRALIV TRANSP - INTERIOR",
    "price_hidden": "$19,288",
    "coseguro": "$19,476",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.67",
    "description": "MOD4.A-LOC MOCHILA ULTRALIV TRANSP - SANTA FE Y ROSARIO",
    "price_hidden": "$17,522",
    "coseguro": "$17,692",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.68",
    "description": "MOD4.B-REC MOCHILA ULTRALIV TRANSP - INTERIOR",
    "price_hidden": "$19,288",
    "coseguro": "$19,476",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "MOD4.B-REC MOCHILA ULTRALIV TRANSP - INTERIOR $19,288 $19,476 $19,663 43.07.69 MOD4.B-REC MOCHILA ULTRALIV TRANSP - SANTA FE Y ROSARIO $14,006 $14,142 $14,278 43.07.83 5C- LOC. CPAP C/HUM. INCORPORADO - INTERIOR $89,547 $90,417 $91,286 43.07.84 5C- LOC. CPAP C/HUM. INCORPORADO - SANTA FE Y ROSARIO $74,661 $75,386 $76,111 43.07.85 5D- LOC.CPAP AUTOAJUSTABLE C/HUM. INCORPORADO - INTERIOR $121,334 $122,512 $123,690 43.07.86 5D- LOC.CPAP AUTOAJUSTABLE C/HUM. INCORPORADO - SANTA FE Y ROSARIO $101,153 $102,135 $103,117 43.07.87 6C- LOC. BPAP SIN FCIA BACK UP C/HUM. INCORPORADO - INTERIOR $234,467 $236,744 $239,020 43.07.88 6C- LOC. BPAP SIN FCIA BACK UP C/HUM. INCORPORADO - SANTA FE Y ROSARIO $199,382 $201,318 $203,254 43.07.89 6D- LOC BPAP CON FCIA BACK UP C/HUM. INCORPORADO - INTERIOR $338,196 $341,479 $344,763 43.07.90 6D- LOC BPAP CON FCIA BACK UP C/HUM. INCORPORADO - SANTA FE Y ROSARIO $289,526 $292,337 $295,148 43.07.80 MOD8-LOC EQUIP OXIMETROS C/ALARMA - INTERIOR $126,448 $127,676 $128,903 43.07.81 MOD8-LOC EQUIP OXIMETROS C/ALARMA - SANTA FE Y ROSARIO $108,345 $109,396 $110,448"
  },
  {
    "code": "43.07.69",
    "description": "MOD4.B-REC MOCHILA ULTRALIV TRANSP - SANTA FE Y ROSARIO",
    "price_hidden": "$14,006",
    "coseguro": "$14,142",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.83",
    "description": "5C- LOC. CPAP C/HUM. INCORPORADO - INTERIOR",
    "price_hidden": "$89,547",
    "coseguro": "$90,417",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.84",
    "description": "5C- LOC. CPAP C/HUM. INCORPORADO - SANTA FE Y ROSARIO",
    "price_hidden": "$74,661",
    "coseguro": "$75,386",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.85",
    "description": "5D- LOC.CPAP AUTOAJUSTABLE C/HUM. INCORPORADO - INTERIOR",
    "price_hidden": "$121,334",
    "coseguro": "$122,512",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.86",
    "description": "5D- LOC.CPAP AUTOAJUSTABLE C/HUM. INCORPORADO - SANTA FE Y ROSARIO",
    "price_hidden": "$101,153",
    "coseguro": "$102,135",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.87",
    "description": "6C- LOC. BPAP SIN FCIA BACK UP C/HUM. INCORPORADO - INTERIOR",
    "price_hidden": "$234,467",
    "coseguro": "$236,744",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.88",
    "description": "6C- LOC. BPAP SIN FCIA BACK UP C/HUM. INCORPORADO - SANTA FE Y ROSARIO",
    "price_hidden": "$199,382",
    "coseguro": "$201,318",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.89",
    "description": "6D- LOC BPAP CON FCIA BACK UP C/HUM. INCORPORADO - INTERIOR",
    "price_hidden": "$338,196",
    "coseguro": "$341,479",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.90",
    "description": "6D- LOC BPAP CON FCIA BACK UP C/HUM. INCORPORADO - SANTA FE Y ROSARIO",
    "price_hidden": "$289,526",
    "coseguro": "$292,337",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.80",
    "description": "MOD8-LOC EQUIP OXIMETROS C/ALARMA - INTERIOR",
    "price_hidden": "$126,448",
    "coseguro": "$127,676",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.81",
    "description": "MOD8-LOC EQUIP OXIMETROS C/ALARMA - SANTA FE Y ROSARIO",
    "price_hidden": "$108,345",
    "coseguro": "$109,396",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.91",
    "description": "",
    "price_hidden": "$530,005",
    "coseguro": "$535,151",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "10A- MOD. ASISTENCIA RESPIRATORIA BI-NIVEL C/FREC RESPALDO Y BATERIA INTERNA+ACCESORIOS $530,005 $535,151 $540,297"
  },
  {
    "code": "43.07.92",
    "description": "",
    "price_hidden": "$838,078",
    "coseguro": "$846,215",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "10B-MOD. ASISTENCIA RESPIRATORIA SOPORTE VITAL (RESPIRADOR CONVENCIONAL)+ACCESORIOS $838,078 $846,215 $854,351"
  },
  {
    "code": "43.07.93",
    "description": "10C- MOD ASISTENCIA RESPIRTATORIA SOPORTE VITAL BACK UP",
    "price_hidden": "$743,756",
    "coseguro": "$750,977",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "10C- MOD ASISTENCIA RESPIRTATORIA SOPORTE VITAL BACK UP $743,756 $750,977 $758,198 43.07.94 10D-BATERIA EXTERNA BACK UP PARA 10A/10B (AUD.MEDICA TERRENO) $74,381 $75,103 $75,825 43.07.95 MOD11 REPOSICI\u00d3N DE MASCARA NASAL ESTANDAR PARA CPAP-BIPAP $62,702 $63,311 $63,920 43.07.96 MOD12 REPOSICI\u00d3N DE MASCARA BUCONASAL ESTANDAR PARA CPAP-BIPAP $136,666 $137,993 $139,320 43.07.97 INICIO MOD. 1 A. LOCAC. TUBO - INTERIOR $72,608 $73,313 $74,017 43.07.98 INICIO MOD. 1 A. LOCAC. TUBO - CENTRO $62,727 $63,336 $63,945 43.07.99 INICIO MOD. 2 A. LOCAC. SIST. O2 LIQ C/MOCH. - INTERIOR $574,055 $579,628 $585,201 43.08.00 INICIO MOD. 2 A. LOCAC. SIST. O2 LIQ C/MOCH. - CENTRO $487,595 $492,328 $497,062 43.08.01 INICIO MOD. 3 A. LOCAC. CONCENT. O2 - INTERIOR $53,300 $53,817 $54,335 43.08.02 INICIO MOD. 3 A. LOCAC. CONCENT. O2 - CENTRO $41,844 $42,250 $42,656 43.08.03 INICIO MOD. 3 B. LOCAC. CONCENT. O2 ALTO FLUJO - INTERIOR $191,149 $193,005 $194,861 43.08.04 INICIO MOD. 3 B. LOCAC. CONCENT. O2 ALTO FLUJO - CENTRO $169,597 $171,243 $172,890 43.08.05 INICIO MOD. 3 C. LOCAC. CONCENT. O2 C/TUBO OX BUP - INTERIOR $109,342 $110,404 $111,465 43.08.06 INICIO MOD. 3 C. LOCAC. CONCENT. O2 C/TUBO OX BUP - CENTRO $93,226 $94,131 $95,036 43.08.07 INICIO MOD. 3 D. LOCAC. CONCENT. O2 PORTATIL - INTERIOR $465,670 $470,191 $474,712 43.08.08 INICIO MOD. 3 D. LOCAC. CONCENT. O2 PORTATIL - CENTRO $435,677 $439,907 $444,137 43.08.09 INICIO MOD. 4 A. LOC. MOCHILA ULTRALIV. TRANSP. - INTERIOR $19,288 $19,476 $19,663 43.08.10 INICIO MOD. 4 A. LOC. MOCHILA ULTRALIV. TRANSP. - CENTRO $17,522 $17,692 $17,863 43.08.11 INICIO MOD. 5 C. LOC. CPAP C/HUM. INCORPORADO \u2013 INTERIOR $89,547 $90,417 $91,286 43.08.12 INICIO MOD. 5 C. LOC. CPAP C/HUM. INCORPORADO \u2013 CENTRO $74,661 $75,386 $76,111 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales"
  },
  {
    "code": "43.07.94",
    "description": "10D-BATERIA EXTERNA BACK UP PARA 10A/10B (AUD.MEDICA TERRENO)",
    "price_hidden": "$74,381",
    "coseguro": "$75,103",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.95",
    "description": "MOD11 REPOSICI\u00d3N DE MASCARA NASAL ESTANDAR PARA CPAP-BIPAP",
    "price_hidden": "$62,702",
    "coseguro": "$63,311",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.96",
    "description": "MOD12 REPOSICI\u00d3N DE MASCARA BUCONASAL ESTANDAR PARA CPAP-BIPAP",
    "price_hidden": "$136,666",
    "coseguro": "$137,993",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.97",
    "description": "INICIO MOD. 1 A. LOCAC. TUBO - INTERIOR",
    "price_hidden": "$72,608",
    "coseguro": "$73,313",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.98",
    "description": "INICIO MOD. 1 A. LOCAC. TUBO - CENTRO",
    "price_hidden": "$62,727",
    "coseguro": "$63,336",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.07.99",
    "description": "INICIO MOD. 2 A. LOCAC. SIST. O2 LIQ C/MOCH. - INTERIOR",
    "price_hidden": "$574,055",
    "coseguro": "$579,628",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.00",
    "description": "INICIO MOD. 2 A. LOCAC. SIST. O2 LIQ C/MOCH. - CENTRO",
    "price_hidden": "$487,595",
    "coseguro": "$492,328",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.01",
    "description": "INICIO MOD. 3 A. LOCAC. CONCENT. O2 - INTERIOR",
    "price_hidden": "$53,300",
    "coseguro": "$53,817",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.02",
    "description": "INICIO MOD. 3 A. LOCAC. CONCENT. O2 - CENTRO",
    "price_hidden": "$41,844",
    "coseguro": "$42,250",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.03",
    "description": "INICIO MOD. 3 B. LOCAC. CONCENT. O2 ALTO FLUJO - INTERIOR",
    "price_hidden": "$191,149",
    "coseguro": "$193,005",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.04",
    "description": "INICIO MOD. 3 B. LOCAC. CONCENT. O2 ALTO FLUJO - CENTRO",
    "price_hidden": "$169,597",
    "coseguro": "$171,243",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.05",
    "description": "INICIO MOD. 3 C. LOCAC. CONCENT. O2 C/TUBO OX BUP - INTERIOR",
    "price_hidden": "$109,342",
    "coseguro": "$110,404",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.06",
    "description": "INICIO MOD. 3 C. LOCAC. CONCENT. O2 C/TUBO OX BUP - CENTRO",
    "price_hidden": "$93,226",
    "coseguro": "$94,131",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.07",
    "description": "INICIO MOD. 3 D. LOCAC. CONCENT. O2 PORTATIL - INTERIOR",
    "price_hidden": "$465,670",
    "coseguro": "$470,191",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.08",
    "description": "INICIO MOD. 3 D. LOCAC. CONCENT. O2 PORTATIL - CENTRO",
    "price_hidden": "$435,677",
    "coseguro": "$439,907",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.09",
    "description": "INICIO MOD. 4 A. LOC. MOCHILA ULTRALIV. TRANSP. - INTERIOR",
    "price_hidden": "$19,288",
    "coseguro": "$19,476",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.10",
    "description": "INICIO MOD. 4 A. LOC. MOCHILA ULTRALIV. TRANSP. - CENTRO",
    "price_hidden": "$17,522",
    "coseguro": "$17,692",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.11",
    "description": "INICIO MOD. 5 C. LOC. CPAP C/HUM. INCORPORADO \u2013 INTERIOR",
    "price_hidden": "$89,547",
    "coseguro": "$90,417",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.12",
    "description": "INICIO MOD. 5 C. LOC. CPAP C/HUM. INCORPORADO \u2013 CENTRO",
    "price_hidden": "$74,661",
    "coseguro": "$75,386",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.13",
    "description": "INICIO MOD. 5 D. LOC. CPAP AUTOAJUSTABLE C/HUM. INCORPORADO \u2013 INTERIOR",
    "price_hidden": "$121,334",
    "coseguro": "$122,512",
    "bonos": "BQ",
    "source": "MEDICAS",
    "normativa": "INICIO MOD. 5 D. LOC. CPAP AUTOAJUSTABLE C/HUM. INCORPORADO \u2013 INTERIOR $121,334 $122,512 $123,690 43.08.14 INICIO MOD. 5 D. LOC. CPAP AUTOAJUSTABLE C/HUM. INCORPORADO \u2013 CENTRO $101,153 $102,135 $103,117 43.08.15 INICIO MOD. 6 C. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 INTERIOR $234,467 $236,744 $239,020 43.08.16 INICIO MOD. 6 C. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 CENTRO $199,382 $201,318 $203,254 43.08.17 INICIO MOD. 6 D. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 INTERIOR $338,196 $341,479 $344,763 43.08.18 INICIO MOD. 6 D. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 CENTRO $289,526 $292,337 $295,148 43.08.19 INICIO MOD. 8 \u2013 LOC. EQUIPO OX\u00cdMETRO C/ALARMA \u2013 INTERIOR $126,448 $127,676 $128,903 43.08.20 INICIO MOD. 8 \u2013 LOC. EQUIPO OX\u00cdMETRO C/ALARMA \u2013 CENTRO $108,345 $109,396 $110,448 PODOLOG\u00cdA OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "43.08.14",
    "description": "INICIO MOD. 5 D. LOC. CPAP AUTOAJUSTABLE C/HUM. INCORPORADO \u2013 CENTRO",
    "price_hidden": "$101,153",
    "coseguro": "$102,135",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.15",
    "description": "INICIO MOD. 6 C. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 INTERIOR",
    "price_hidden": "$234,467",
    "coseguro": "$236,744",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.16",
    "description": "INICIO MOD. 6 C. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 CENTRO",
    "price_hidden": "$199,382",
    "coseguro": "$201,318",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.17",
    "description": "INICIO MOD. 6 D. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 INTERIOR",
    "price_hidden": "$338,196",
    "coseguro": "$341,479",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.18",
    "description": "INICIO MOD. 6 D. LOC. BPAP SIN FCIA. BACK UP C/HUM. INCORPORADO \u2013 CENTRO",
    "price_hidden": "$289,526",
    "coseguro": "$292,337",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.19",
    "description": "INICIO MOD. 8 \u2013 LOC. EQUIPO OX\u00cdMETRO C/ALARMA \u2013 INTERIOR",
    "price_hidden": "$126,448",
    "coseguro": "$127,676",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "43.08.20",
    "description": "INICIO MOD. 8 \u2013 LOC. EQUIPO OX\u00cdMETRO C/ALARMA \u2013 CENTRO",
    "price_hidden": "$108,345",
    "coseguro": "$109,396",
    "bonos": "BQ",
    "source": "MEDICAS"
  },
  {
    "code": "38.70.10",
    "description": "M\u00d3DULO 1 - PODOLOG\u00cdA - PRESTACI\u00d3N B\u00c1SICA",
    "price_hidden": "$6,701",
    "coseguro": "$6,766",
    "bonos": "3",
    "source": "MEDICAS",
    "normativa": "M\u00d3DULO 1 - PODOLOG\u00cdA - PRESTACI\u00d3N B\u00c1SICA $6,701 $6,766 $6,831 38.70.20 M\u00d3DULO 2 - ONICOMICOSIS (HONGOS EN U\u00d1A) $11,538 $11,650 $11,762 38.70.30 M\u00d3DULO 3 - HELOMAS S\u00c9PTICOS $11,538 $11,650 $11,762 38.70.41 M\u00d3DULO 4 - ONICOCRIPTOSIS GRADO I Y II $11,538 $11,650 $11,762 38.70.42 M\u00d3DULO 5 - ONICOCRIPTOSIS GRADO III $23,026 $23,250 $23,474 38.70.51 M\u00d3DULO 6 - ORTONIQUIA - M\u00c9TODO O T\u00c9CNICA $43,231 $43,651 $44,071 38.70.52 M\u00d3DULO 7 - ORTONIQUIA - M\u00c9TODO O T\u00c9CNICA $24,034 $24,268 $24,501 Norma de Trabajo: El servicio de Podolog\u00eda se brindar\u00e1 solamente a afiliados con diagn\u00f3stico de Diabetes y Pie Diab\u00e9tico, con lo cual para la autorizaci\u00f3n respectiva se deber\u00e1 acompa\u00f1ar certificado m\u00e9dico/historia cl\u00ednica del profesional tratante de la patolog\u00eda. \u00d3PTICA OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "38.70.20",
    "description": "M\u00d3DULO 2 - ONICOMICOSIS (HONGOS EN U\u00d1A)",
    "price_hidden": "$11,538",
    "coseguro": "$11,650",
    "bonos": "6",
    "source": "MEDICAS"
  },
  {
    "code": "38.70.30",
    "description": "M\u00d3DULO 3 - HELOMAS S\u00c9PTICOS",
    "price_hidden": "$11,538",
    "coseguro": "$11,650",
    "bonos": "6",
    "source": "MEDICAS"
  },
  {
    "code": "38.70.41",
    "description": "M\u00d3DULO 4 - ONICOCRIPTOSIS GRADO I Y II",
    "price_hidden": "$11,538",
    "coseguro": "$11,650",
    "bonos": "6",
    "source": "MEDICAS"
  },
  {
    "code": "38.70.42",
    "description": "M\u00d3DULO 5 - ONICOCRIPTOSIS GRADO III",
    "price_hidden": "$23,026",
    "coseguro": "$23,250",
    "bonos": "11",
    "source": "MEDICAS"
  },
  {
    "code": "38.70.51",
    "description": "M\u00d3DULO 6 - ORTONIQUIA - M\u00c9TODO O T\u00c9CNICA",
    "price_hidden": "$43,231",
    "coseguro": "$43,651",
    "bonos": "20",
    "source": "MEDICAS"
  },
  {
    "code": "38.70.52",
    "description": "M\u00d3DULO 7 - ORTONIQUIA - M\u00c9TODO O T\u00c9CNICA",
    "price_hidden": "$24,034",
    "coseguro": "$24,268",
    "bonos": "12",
    "source": "MEDICAS"
  },
  {
    "code": "Norma de Trabajo:",
    "description": "El servicio de Podolog\u00eda se brindar\u00e1 solamente a afiliados con diagn\u00f3stico de Diabetes y",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "Pie Diab\u00e9tico,",
    "description": "con lo cual para la autorizaci\u00f3n respectiva se deber\u00e1 acompa\u00f1ar certificado m\u00e9dico/historia",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "cl\u00ednica del profesional",
    "description": "tratante de la patolog\u00eda.",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.01",
    "description": "LENTES AEREOS CERCA RANGO I",
    "price_hidden": "$19,170",
    "coseguro": "$19,356",
    "bonos": "S/C",
    "source": "MEDICAS",
    "normativa": "LENTES AEREOS CERCA RANGO I $19,170 $19,356 $19,542 81.01.02 LENTES AEREOS CERCA RANGO II $29,551 $29,838 $30,124 81.01.03 LENTES AEREOS CERCA RANGO III $38,501 $38,875 $39,249 81.01.04 LENTES AEREOS LEJOS RANGO I $19,170 $19,356 $19,542 81.01.05 LENTES AEREOS LEJOS RANGO II $29,551 $29,838 $30,124 81.01.06 LENTES AEREOS LEJOS RANGO III $38,501 $38,875 $39,249 81.01.07 ARMAZON - SUBSIDIO $31,824 $32,133 $32,442 81.01.11 LENTE NEUTRA $17,759 $17,931 $18,104 81.02.01 LENTES CONTACTO FLEXIBLES $154,177 $155,674 $157,171 81.02.02 LENTES CONTACTO BLANDAS $161,960 $163,533 $165,105 81.02.03 LENTES CONTACTO BLANDAS TORICAS $349,469 $352,862 $356,254 Referencias: OC: Orden de Consulta - OI: Orden de Internaci\u00f3n - S/C: Sin Coseguro - BQ: Bono Quir\u00fargico - BPE: Bono Prestaciones Especiales HOTELERIA - SANTA FE OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "81.01.02",
    "description": "LENTES AEREOS CERCA RANGO II",
    "price_hidden": "$29,551",
    "coseguro": "$29,838",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.03",
    "description": "LENTES AEREOS CERCA RANGO III",
    "price_hidden": "$38,501",
    "coseguro": "$38,875",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.04",
    "description": "LENTES AEREOS LEJOS RANGO I",
    "price_hidden": "$19,170",
    "coseguro": "$19,356",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.05",
    "description": "LENTES AEREOS LEJOS RANGO II",
    "price_hidden": "$29,551",
    "coseguro": "$29,838",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.06",
    "description": "LENTES AEREOS LEJOS RANGO III",
    "price_hidden": "$38,501",
    "coseguro": "$38,875",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.07",
    "description": "ARMAZON - SUBSIDIO",
    "price_hidden": "$31,824",
    "coseguro": "$32,133",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.01.11",
    "description": "LENTE NEUTRA",
    "price_hidden": "$17,759",
    "coseguro": "$17,931",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.02.01",
    "description": "LENTES CONTACTO FLEXIBLES",
    "price_hidden": "$154,177",
    "coseguro": "$155,674",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.02.02",
    "description": "LENTES CONTACTO BLANDAS",
    "price_hidden": "$161,960",
    "coseguro": "$163,533",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "81.02.03",
    "description": "LENTES CONTACTO BLANDAS TORICAS",
    "price_hidden": "$349,469",
    "coseguro": "$352,862",
    "bonos": "S/C",
    "source": "MEDICAS"
  },
  {
    "code": "38.10.01",
    "description": "HABITACI\u00d3N SIMPLE (INCLUYE DESAYUNO)",
    "price_hidden": "$73,948",
    "coseguro": "$74,666",
    "bonos": "10",
    "source": "MEDICAS",
    "normativa": "HABITACI\u00d3N SIMPLE (INCLUYE DESAYUNO) $73,948 $74,666 $75,384"
  },
  {
    "code": "38.10.02",
    "description": "HABITACI\u00d3N DOBLE (INCLUYE DESAYUNO)",
    "price_hidden": "$85,068",
    "coseguro": "$85,894",
    "bonos": "12",
    "source": "MEDICAS",
    "normativa": "HABITACI\u00d3N DOBLE (INCLUYE DESAYUNO) $85,068 $85,894 $86,720"
  },
  {
    "code": "38.10.03",
    "description": "HABITACI\u00d3N TRIPLE (INCLUYE DESAYUNO)",
    "price_hidden": "$101,778",
    "coseguro": "$102,766",
    "bonos": "15",
    "source": "MEDICAS",
    "normativa": "HABITACI\u00d3N TRIPLE (INCLUYE DESAYUNO) $101,778 $102,766 $103,754 La cantidad de bonos corresponde por cada d\u00eda de estad\u00eda HOTELERIA - BUENOS AIRES OCT/25 NOV/25 DIC/25"
  },
  {
    "code": "La cantidad",
    "description": "de bonos corresponde por cada d\u00eda de estad\u00eda",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "MEDICAS"
  },
  {
    "code": "38.10.04",
    "description": "HABITACI\u00d3N SIMPLE (INCLUYE DESAYUNO)",
    "price_hidden": "$87,576",
    "coseguro": "$88,427",
    "bonos": "18",
    "source": "MEDICAS",
    "normativa": "HABITACI\u00d3N SIMPLE (INCLUYE DESAYUNO) $87,576 $88,427 $89,277"
  },
  {
    "code": "38.10.05",
    "description": "HABITACI\u00d3N DOBLE (INCLUYE DESAYUNO)",
    "price_hidden": "$102,352",
    "coseguro": "$103,345",
    "bonos": "20",
    "source": "MEDICAS",
    "normativa": "HABITACI\u00d3N DOBLE (INCLUYE DESAYUNO) $102,352 $103,345 $104,339"
  },
  {
    "code": "38.10.06",
    "description": "HABITACI\u00d3N TRIPLE (INCLUYE DESAYUNO)",
    "price_hidden": "$129,868",
    "coseguro": "$131,129",
    "bonos": "26",
    "source": "MEDICAS",
    "normativa": "HABITACI\u00d3N TRIPLE (INCLUYE DESAYUNO) $129,868 $131,129 $132,390"
  },
  {
    "code": "38.10.07",
    "description": "DEPARTAMENTOS O APART HOTEL",
    "price_hidden": "$71,646",
    "coseguro": "$72,342",
    "bonos": "15",
    "source": "MEDICAS"
  }
];
const biochemDataV3 = [
  {
    "code": "660340",
    "description": "FENILPIRUVICO, \u00c1CIDO - urinario (cualitativo)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660342",
    "description": "FENOTIAZINAS.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660343",
    "description": "FERREMIA (Fe)",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660344",
    "description": "FIBRINOGENO, PRODUCTOS DE DEGRADACION - PDF -plasm\u00e1tico.",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660345",
    "description": "FIBRINOGENO - sangre.",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660349",
    "description": "FISICO QUIMICO - Examen de Exudados, Trasudados.",
    "price_hidden": "$12,040.00",
    "coseguro": "$12,160.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660350",
    "description": "FLUOREMIA (F)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660351",
    "description": "FLUORURIA.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660352",
    "description": "FOLICO, \u00c1CIDO.",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660353",
    "description": "FONDO OSCURO.",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660354",
    "description": "FORMULA LEUCOCITARIA.",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660355",
    "description": "FOSFATASA ACIDA PROSTATICA (EFM).",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660356",
    "description": "FOSFATASA ACIDA TOTAL (EFM).",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660357",
    "description": "FOSFATASA ALCALINA (FAL)",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660360",
    "description": "FOSFATASA ALCALINA TERMOESTABLE.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660361",
    "description": "FOSFATASA ALCALINA - ISOENZIMAS.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660362",
    "description": "FOSFATEMIA (P)",
    "price_hidden": "$1,806.00",
    "coseguro": "$1,824.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660363",
    "description": "FOSFATURIA (P)",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660366",
    "description": "FOSFORO CLEARENCE DEPURACION.",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660370",
    "description": "FSH - HORMONA FOL\u00cdCULO ESTIMULANTE.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660371",
    "description": "FTA/ ABS (IFI - ELISA) SIFILIS y TPHA.",
    "price_hidden": "$6,848.00",
    "coseguro": "$6,912.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660373",
    "description": "FUNCIONAL, EXAMEN DE MATERIA FECAL - b\u00e1sico",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660402",
    "description": "GALACTOSEMIA.",
    "price_hidden": "$6,848.00",
    "coseguro": "$6,912.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660404",
    "description": "GASES EN SANGRE, PCO2 y PO2.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660405",
    "description": "GASTRINA, s\u00e9rica.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660408",
    "description": "GLOBULOS BLANCOS, RECUENTO y FORMULA -materia fecal.",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660409",
    "description": "GLOBULOS BLANCOS, RECUENTO DE",
    "price_hidden": "$856.00",
    "coseguro": "$864.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660410",
    "description": "GLOBULOS ROJOS, RECUENTO DE",
    "price_hidden": "$856.00",
    "coseguro": "$864.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660411",
    "description": "GLUCAGON.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660412",
    "description": "GLUCEMIA (C/U)",
    "price_hidden": "$1,806.00",
    "coseguro": "$1,824.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660413",
    "description": "GLUCEMIA, PRUEBA de SOBRECARGA (x 2 - dos determinaciones)",
    "price_hidden": "$3,852.00",
    "coseguro": "$3,888.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660416",
    "description": "GLUCOPROTEINOGRAMA.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660417",
    "description": "GLUCOSA en orina (C/U)",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660418",
    "description": "GLUCOSA 6-FOSFATO ISOMERASA",
    "price_hidden": "$11,128.00",
    "coseguro": "$11,232.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660420",
    "description": "GLUTAMIL TRANSPEPTIDASA. Gamma-",
    "price_hidden": "$2,140.00",
    "coseguro": "$2,160.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660430",
    "description": "GRAHAM, TEST DE",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660432",
    "description": "GRASAS, CUANTITATIVO (Van de Kamer) - materia fecal",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660433",
    "description": "GRUPO SANGU\u00cdNEO y FACTOR Rho - Du / D|j",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660463",
    "description": "HAPTOGLOBINA.",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660464",
    "description": "HEINZ, CUERPOS DE (tinci\u00f3n)",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660465",
    "description": "",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660466",
    "description": "HEMATOCRITO.",
    "price_hidden": "$1,204.00",
    "coseguro": "$1,216.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660468",
    "description": "HEMOCULTIVO AEROBIOS (c/u)",
    "price_hidden": "$12,040.00",
    "coseguro": "$12,160.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660470",
    "description": "HEMOGLOBINA, DOSAJE DE (Hb)",
    "price_hidden": "$856.00",
    "coseguro": "$864.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660471",
    "description": "HEMOGLOBINA, ELECTROFORESIS.",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660472",
    "description": "HEMOGLOBINA - plasm\u00e1tica",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660475",
    "description": "HEMOGRAMA.",
    "price_hidden": "$3,612.00",
    "coseguro": "$3,648.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660479",
    "description": "HEMOSIDERINA - urinaria",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660480",
    "description": "HEPARINA, RESISTENCIA A LA (In Vitro)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660481",
    "description": "HEPATOGRAMA.",
    "price_hidden": "$7,224.00",
    "coseguro": "$7,296.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660483",
    "description": "HIDATIDOSIS (HAI)",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660484",
    "description": "HIDATIDOSIS, Ac. IgG \u00f3 Totales Anti- (IFI)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660487",
    "description": "HIDROXINDOLACETICO, \u00c1CIDO.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660488",
    "description": "HIDROXIPROLINA - urinaria.",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660489",
    "description": "HIPERHEPARINEMIA.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660494",
    "description": "HUDDLESSON, REACCION DE (Rosa de Bengala -Brucelosis).",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660531",
    "description": "MYCOBACTERIUM, IDENTIFICACION.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660532",
    "description": "IDENTIFICACION SEROL\u00d3GICA DE GERMENES.",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660535",
    "description": "INMUNOELECTROFORESIS.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660536",
    "description": "INMUNOELECTROFORESIS LIQUIDOS BIOLOGICOS.",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660537",
    "description": "INMUNOGLOBULINA A (IgA)",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660538",
    "description": "INMUNOGLOBULINA D (IgD)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660539",
    "description": "INMUNOGLOBULINA E (IgE)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660540",
    "description": "INMUNOGLOBULINA G (IgG)",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660541",
    "description": "INMUNOGLOBULINA M (IgM)",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660543",
    "description": "INSULINA.",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660546",
    "description": "IONOGRAMA - s\u00e9rico.",
    "price_hidden": "$4,214.00",
    "coseguro": "$4,256.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660547",
    "description": "IONOGRAMA - urinario.",
    "price_hidden": "$2,996.00",
    "coseguro": "$3,024.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660548",
    "description": "ISOCITRICO DEHIDROGENASA.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660591",
    "description": "LACTAMINICO, \u00c1CIDO.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660592",
    "description": "L\u00c1CTICO, \u00c1CIDO ENZIMATICO.",
    "price_hidden": "$12,040.00",
    "coseguro": "$12,160.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660593",
    "description": "L\u00c1CTICO, \u00c1CIDO - materia fecal.",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660594",
    "description": "L\u00c1CTICO DEHIDROGENASA - LDH",
    "price_hidden": "$3,612.00",
    "coseguro": "$3,648.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660596",
    "description": "L\u00c1CTICO DEHIDROGENASA ISOENZIMAS - LDH Isoenzimas.",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660597",
    "description": "LACTOGENO PLACENTARIO / SOMATOMAMOTROFINA",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660598",
    "description": "FACTOR REUMATOIDEO - ARTRITIS REUMATOIDE",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660600",
    "description": "LEPTOSPIRAS, INVESTIGACI\u00d3N DE (fondo oscuro o coloraciones) - urinaria",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660602",
    "description": "TRICHINOSIS, INVESTIGACI\u00d3N DE",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660603",
    "description": "LAZO, PRUEBA DEL",
    "price_hidden": "$856.00",
    "coseguro": "$864.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660606",
    "description": "LEUCINAMINOPEPTIDASA (LAP)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660610",
    "description": "LEVULINICO, \u00c1CIDO DELTA-AMINO",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660611",
    "description": "LEVULINICO, DELTA DEHIDRATASA",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660612",
    "description": "LH - HORMONA LUTEINIZANTE",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660613",
    "description": "LIPASA, s\u00e9rica.",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660615",
    "description": "LIPIDOGRAMA (Electrofor\u00e9tico).",
    "price_hidden": "$5,992.00",
    "coseguro": "$6,048.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660619",
    "description": "LIQUIDO CEFALORRAQUIDEO, Fco-Qco - Citol\u00f3gico.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660620",
    "description": "LIQUIDO DE PUNCION, Examen Fco-Qco - Citol\u00f3gico.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660622",
    "description": "LISTERIAS, Ac. Anti - (IFI - ELISA)",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660623",
    "description": "LITIO (Li) (ISE - I\u00f3n selectivo - Fotometr\u00eda de llama o fotometr\u00eda de emisi\u00f3n)",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660624",
    "description": "LITIO (Li) (por Absorci\u00f3n At\u00f3mica - A.A.)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660653",
    "description": "MAGNESIO (Mg) - s\u00e9rico.",
    "price_hidden": "$3,010.00",
    "coseguro": "$3,040.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660654",
    "description": "MAGNESIO (Mg) - urinario.",
    "price_hidden": "$2,140.00",
    "coseguro": "$2,160.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660656",
    "description": "MANTOUX, INTRADERMO-REACCION DE (PPD)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660657",
    "description": "MEDULOGRAMA.",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660660",
    "description": "MERCURIO (Hg) - s\u00e9rico o urinario.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660662",
    "description": "METANEFRINAS FRACCIONADAS URINARIAS",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660663",
    "description": "METANOL - urinario.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660664",
    "description": "MICOLOGIA (Directo - Coloraci\u00f3n).",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660665",
    "description": "MICOLOGIA (Cultivo e Identificaci\u00f3n).",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660667",
    "description": "MOCO CERVICAL, CRISTALIZACION",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660668",
    "description": "MOCO NASAL, PH - CITOLOGICO.",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660669",
    "description": "MONONUCLEOSIS (Aglutinaci\u00f3n - Test de L\u00e1tex o Monotest).",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660670",
    "description": "MONONUCLEOSIS HEMOAGLUTINACION (Paul Bunnell)",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660671",
    "description": "MONONUCLEOSIS.",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660672",
    "description": "MON\u00d3XIDO de CARBONO.",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660673",
    "description": "MORFINA OPIACEOS, DERIVADOS - l\u00edquidos biol\u00f3gicos.",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660684",
    "description": "MULTIRRESISTENCIA, VIGILANCIA DE BACTERIAS RESISTENTES",
    "price_hidden": "$22,256.00",
    "coseguro": "$22,464.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660695",
    "description": "NORADRENALINA, s\u00e9rica - CATECOLAMINA",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660696",
    "description": "NORADRENALINA, urinaria - CATECOLAMINA",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660702",
    "description": "NUCLEOTIDASA - 5' N",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660711",
    "description": "ORINA COMPLETA.",
    "price_hidden": "$3,612.00",
    "coseguro": "$3,648.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660714",
    "description": "OSMOLARIDAD - CLEARENCE (sangre - orina)",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660715",
    "description": "OSMOLARIDAD - suero.",
    "price_hidden": "$2,140.00",
    "coseguro": "$2,160.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660716",
    "description": "OXIGENO, PO2 - sangre arterial.",
    "price_hidden": "N/T",
    "coseguro": "N/T",
    "bonos": "N/T",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660732",
    "description": "PAPANICOLAOU ENDOCERVICAL",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660734",
    "description": "PAPANICOLAOU EXOCERVICAL",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660736",
    "description": "PARASITOLOGICO en MATERIA FECAL.",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660737",
    "description": "PARASITOS HEMATICOS.",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660738",
    "description": "PARASITOS SUPERIORES.",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660739",
    "description": "PARATHORMONA - PTH",
    "price_hidden": "$11,556.00",
    "coseguro": "$11,664.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660740",
    "description": "PEROXIDASAS, TINCION",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660741",
    "description": "PH - l\u00edquidos biol\u00f3gicos.",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660742",
    "description": "PH - sangu\u00edneo",
    "price_hidden": "N/T",
    "coseguro": "N/T",
    "bonos": "N/T",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660743",
    "description": "PIRUVATO- QUINASA",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660744",
    "description": "PIRUVICO, \u00c1CIDO ENZIMATICO",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660745",
    "description": "PLAQUETARIOS, FACTORES",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660746",
    "description": "PLAQUETAS, RECUENTO DE",
    "price_hidden": "$1,204.00",
    "coseguro": "$1,216.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660747",
    "description": "PLASMA RECALCIFICADO, TIEMPO DE",
    "price_hidden": "$856.00",
    "coseguro": "$864.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660748",
    "description": "PLASMINOGENO (IDR)",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660749",
    "description": "PLOMO (Pb) - s\u00e9rico o urinario.",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660751",
    "description": "PORFIRINAS o UROPORFIRINAS - urinarias",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660752",
    "description": "PORFOBILINOGENO (cualitativo) - urinario.",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660753",
    "description": "POTASEMIA.",
    "price_hidden": "N/T",
    "coseguro": "N/T",
    "bonos": "N/T",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660754",
    "description": "POTASURIA.",
    "price_hidden": "N/T",
    "coseguro": "N/T",
    "bonos": "N/T",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660758",
    "description": "PROGESTERONA - Pg.",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660759",
    "description": "PROLACTINA (Prl)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660761",
    "description": "PROTEINA C REACTIVA - PCR",
    "price_hidden": "$6,020.00",
    "coseguro": "$6,080.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660763",
    "description": "PROTEINA TOTALES.",
    "price_hidden": "$1,806.00",
    "coseguro": "$1,824.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660764",
    "description": "PROTEINOGRAMA ELECTROFOR\u00c9TICO, en suero",
    "price_hidden": "$6,020.00",
    "coseguro": "$6,080.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660765",
    "description": "PROTEINOGRAMA ELECTROFOR\u00c9TICO - LCR",
    "price_hidden": "$28,248.00",
    "coseguro": "$28,512.00",
    "bonos": "18",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660766",
    "description": "PROTEINOGRAMA - l\u00edquidos biol\u00f3gicos",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660767",
    "description": "PROTEINURIA.",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660768",
    "description": "PROTOPORFIRINAS - eritrocitaria",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660769",
    "description": "PROTROMBINA, CONSUMO DE",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660770",
    "description": "PROTROMBINA, RIN",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660771",
    "description": "PROTROMBINA, TIEMPO DE (TP)",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660772",
    "description": "PSEUDOCOLINESTERASA (CHE) o BUTIRILCOLINESTERASA.",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660801",
    "description": "QUIMIOTRIPSINA.",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660812",
    "description": "RENINA - ANGIOTESINA.",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660813",
    "description": "Rho FACTOR - GRUPO SANGUINEO.",
    "price_hidden": "$0.00",
    "coseguro": "$0.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660814",
    "description": "Rho FACTOR C GRANDE",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660815",
    "description": "Rho FACTOR c CHICA",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660816",
    "description": "Rho FACTOR E GRANDE",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660817",
    "description": "Rho FACTOR e CHICA",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660818",
    "description": "RETICULOCITOS, RECUENTO DE",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660820",
    "description": "ROSSE RAGAN, PRUEBA DE (RR)",
    "price_hidden": "$2,140.00",
    "coseguro": "$2,160.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660831",
    "description": "SALICILATOS.",
    "price_hidden": "$10,700.00",
    "coseguro": "$10,800.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660832",
    "description": "SALMONELLA, ANTICUERPOS (IFI - ELISA)",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660833",
    "description": "SANGRE OCULTA - materia fecal (SOMF) -inmunol\u00f3gico",
    "price_hidden": "$9,632.00",
    "coseguro": "$9,728.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660835",
    "description": "SEROTONINA - s\u00e9rica.",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660837",
    "description": "SIDEROFILINA, CAPACIDAD de SATURACI\u00d3N.",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660838",
    "description": "SIMS - HUHNER, TEST DE",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660839",
    "description": "SODIO - s\u00e9rico o urinario.",
    "price_hidden": "N/T",
    "coseguro": "N/T",
    "bonos": "N/T",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660841",
    "description": "SOMATOTROFINA (STH)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660846",
    "description": "SUBTIPO HEMOGLOBINA A2, DETERMINACION DE (electroforesis)",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660847",
    "description": "SUDOR, TEST DE",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660862",
    "description": "TALIO (Tl) - urinario.",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660863",
    "description": "TESTOSTERONA - To",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660864",
    "description": "THORN, PRUEBA DE",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660865",
    "description": "TIROTROFINA - TSH",
    "price_hidden": "$10,836.00",
    "coseguro": "$10,944.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660866",
    "description": "TIROXINA TOTAL - T4",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660867",
    "description": "TIROXINA EFECTIVA - LIBRE (FT4 / T4L)",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660870",
    "description": "TOXOPLASMOSIS (HA)",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660871",
    "description": "TOXOPLASMOSIS (IFI)",
    "price_hidden": "$6,564.00",
    "coseguro": "$6,630.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660873",
    "description": "TRANSAMINASA, GLUTAMICO OXALACETICA (GOT / AST)",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660874",
    "description": "TRANSAMINASA, GLUTAMICO PIRUVICA (GPT / AGT)",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660875",
    "description": "TRANSFERRINA",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660876",
    "description": "TRIGLICERIDOS (Tg)",
    "price_hidden": "$3,010.00",
    "coseguro": "$3,040.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660878",
    "description": "TRIIODOTIRONINA TOTAL - T3",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660879",
    "description": "TROMBINA, PRUEBA DE GENERACI\u00d3N DE LA",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660880",
    "description": "TROMBINA, TIEMPO DE",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660887",
    "description": "TROMBOPLASTINA, TIEMPO DE (KPTT / TTPC / KT)",
    "price_hidden": "$1,712.00",
    "coseguro": "$1,728.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660901",
    "description": "UREA, CLEARENCE DE",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660902",
    "description": "UREA, s\u00e9rica.",
    "price_hidden": "$1,806.00",
    "coseguro": "$1,824.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660903",
    "description": "URETRAL, EXUDADO (Directo y Cultivo).",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660904",
    "description": "\u00daRICO, \u00c1CIDO - s\u00e9rico.",
    "price_hidden": "$1,806.00",
    "coseguro": "$1,824.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660905",
    "description": "\u00daRICO, \u00c1CIDO - urinario.",
    "price_hidden": "$1,284.00",
    "coseguro": "$1,296.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660907",
    "description": "UROCITOGRAMA",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660911",
    "description": "UROCULTIVO (MODULO)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660923",
    "description": "UROPROTEINOGRAMA",
    "price_hidden": "$28,248.00",
    "coseguro": "$28,512.00",
    "bonos": "18",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660931",
    "description": "VAGINAL, EXUDADO o FLUJO (Directo y Cultivo).",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660932",
    "description": "VAINILLIN MANDELICO, \u00c1CIDO - urinario (AVM) (HPLC)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660933",
    "description": "V D R L / USR",
    "price_hidden": "$4,376.00",
    "coseguro": "$4,420.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660935",
    "description": "VARIANTE BACTERIANA.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660936",
    "description": "VERONAL, PRUEBA DEL",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660937",
    "description": "VITAMINA A.",
    "price_hidden": "$31,672.00",
    "coseguro": "$31,968.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660938",
    "description": "VITAMINA B12.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660939",
    "description": "VITAMINA E.",
    "price_hidden": "$31,672.00",
    "coseguro": "$31,968.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660940",
    "description": "VOLEMIA RADIOQU\u00cdMICO.",
    "price_hidden": "P/P",
    "coseguro": "P/P",
    "bonos": "P/P",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660953",
    "description": "WIDAL, REACCION DE",
    "price_hidden": "$3,424.00",
    "coseguro": "$3,456.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660981",
    "description": "ZINC ERITROCITARIO - PROTOPORFIRINA.",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "660982",
    "description": "ZINC (Zn) - s\u00e9rico.",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661000",
    "description": "ANTIGENO PROSTATICO ESPEC\u00cdFICO TOTAL - PSA-t",
    "price_hidden": "$21,672.00",
    "coseguro": "$21,888.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661001",
    "description": "ACTO BIOQU\u00cdMICO DE INTERNACION - (ABI)",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661011",
    "description": "CD4 - SUB POBLACI\u00d3N LINFOCITARIA por Citom. de flujo",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661015",
    "description": "CD8 - SUB POBLACI\u00d3N LINFOCITARIA por Citom. de flujo",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661020",
    "description": "CHLAMYDIAS PNEUMONIAE, Ac. Anti- IgG",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661025",
    "description": "CITOMEGALOVIRUS, Ac. IgG Anti- (CMV-IgG)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661030",
    "description": "CITOMEGALOVIRUS, Ac. IgM Anti- (CMV-IgM)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661035",
    "description": "COLESTEROL HDL (HDL-C)",
    "price_hidden": "$3,612.00",
    "coseguro": "$3,648.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661040",
    "description": "COLESTEROL LDL (LDL-C)",
    "price_hidden": "$4,816.00",
    "coseguro": "$4,864.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661045",
    "description": "CREATINFOSFOQUINASA, ISOENZIMA MB (CKMB / CPKMB)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661050",
    "description": "DROGAS de ABUSO SCREENING (c/u)",
    "price_hidden": "$14,980.00",
    "coseguro": "$15,120.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661055",
    "description": "EPSTEIN BARR, Ac. IgG/Totales Anti- (VEB / VCA IgG)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661060",
    "description": "EPSTEIN BARR, Ac. IgM Anti- (VEB / VCA IgM)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661065",
    "description": "FRUCTOSAMINA.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661070",
    "description": "HEMOGLOBINA GLICOSILADA (Hb A1C)",
    "price_hidden": "$18,060.00",
    "coseguro": "$18,240.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661075",
    "description": "HEPATITIS A, Ac. IgM Anti- (HAV IgM)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661080",
    "description": "HEPATITIS B, Ac. Anti- \"Core\" IgG (HBc -IgG )",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661085",
    "description": "HEPATITIS B, Ant\u00edgeno e (Ag.HBe)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661086",
    "description": "HEPATITIS B, Ant\u00edgeno de Superficie (Ag.HBs )",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661090",
    "description": "HEPATITIS B, Ac. de Superficie Anti- (HBsAc)",
    "price_hidden": "$21,880.00",
    "coseguro": "$22,100.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661095",
    "description": "HEPATITIS C, Ac. IgG Anti- (HCV Ac IgG)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661100",
    "description": "HIDATIDOSIS, Ac. IgG \u00f3 Totales Anti- (IFI)",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661105",
    "description": "HIV, CARGA VIRAL.",
    "price_hidden": "$136,960.00",
    "coseguro": "$138,240.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661110",
    "description": "HIV, WESTERN- BLOT",
    "price_hidden": "$85,600.00",
    "coseguro": "$86,400.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661115",
    "description": "MARCADOR TUMORAL de OVARIO (CA 125)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661120",
    "description": "MARCADOR TUMORAL de MAMA (CA 15. 3)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661125",
    "description": "MARCADOR TUMORAL de COLON (CA 19. 9)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661130",
    "description": "MICROALBUMINURIA / ALBUMINA URINARIA",
    "price_hidden": "$10,700.00",
    "coseguro": "$10,800.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661135",
    "description": "MONITOREO de FARMACOS para ENF. CRONICAS I (Anticonvulsivantes I)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661136",
    "description": "MONITOREO de FARMACOS para ENF. CRONICAS II (Anticonvulsivantes II)",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661137",
    "description": "MONITOREO de FARMACOS para ENF. CRONICAS III (Anticonvulsivantes III)",
    "price_hidden": "$51,360.00",
    "coseguro": "$51,840.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661140",
    "description": "MYCOPLASMA PNEUMONIAE Ac Anti-IgG",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661142",
    "description": "PREPARACI\u00d3N DE SANGRE A TRANSFUNDIR (M\u00d3DULO TRANSFUSIONAL)",
    "price_hidden": "$101,008.00",
    "coseguro": "$101,952.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661145",
    "description": "RUBEOLA, Ac. IgG Anti-",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661150",
    "description": "RUBEOLA, Ac. IgM Anti-",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661160",
    "description": "TORCH (Toxoplasmosis , Rubeola, Citomegalovirus y Herpes 1 y 2 )",
    "price_hidden": "$42,800.00",
    "coseguro": "$43,200.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661170",
    "description": "SUBUNIDAD BETA de GONADOTROFINA CORIONICA (cualitativa) - HCG o p-HCG - Sub p",
    "price_hidden": "$6,848.00",
    "coseguro": "$6,912.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661175",
    "description": "SUBUNIDAD BETA de GONADOTROFINA CORIONICA (cuantitativa) - HCG o p-HCG - Sub p",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661180",
    "description": "TEST RAPIDO en FAUCES para STREPTOCOCCUS p-HEMOL\u00cdTICO Grupo \"A\"",
    "price_hidden": "$10,700.00",
    "coseguro": "$10,800.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661185",
    "description": "TESTOSTERONA BIODISPONIBLE",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661196",
    "description": "",
    "price_hidden": "$47,042.00",
    "coseguro": "$47,515.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "661200",
    "description": "URGENCIAS.-",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662002",
    "description": "ACTO BIOQU\u00cdMICO ADMINISTRATIVO POR VALIDACI\u00d3N",
    "price_hidden": "$428.00",
    "coseguro": "$432.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662003",
    "description": "",
    "price_hidden": "$856.00",
    "coseguro": "$864.00",
    "bonos": "1",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662001",
    "description": "ABC - ACTO BIOQU\u00cdMICO COMPLEMENTARIO",
    "price_hidden": "$2,568.00",
    "coseguro": "$2,592.00",
    "bonos": "2",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662025",
    "description": "ACETILCOLINA, Ac. Anti- RECEPTORES (ACRA)",
    "price_hidden": "$85,600.00",
    "coseguro": "$86,400.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662034",
    "description": "ACETILCOLINESTERASA ERITROCITARIA (ACHE)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662051",
    "description": "ACETONA CUANTITATIVA - s\u00e9rica",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662059",
    "description": "ACETONA CUANTITATIVA - urinaria",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662111",
    "description": "\u00c1CIDO BETA HIDROXIBUT\u00cdRICO",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662128",
    "description": "\u00c1CIDO FENIL AC\u00c9TICO (AFA)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662153",
    "description": "\u00c1CIDO FOLICO - intraeritrocitario.",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662187",
    "description": "\u00c1CIDO HIP\u00daRICO - urinario",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662205",
    "description": "\u00c1CIDO HOMOVAN\u00cdLICO - HVA",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662222",
    "description": "\u00c1CIDO INDOLACETICO, 5 HIDROXI -3-METIL",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662299",
    "description": "\u00c1CIDO OXALICO - urinario (2/ 12 / 24 hs. - c/u)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662316",
    "description": "\u00c1CIDO PIRUVICO - s\u00e9rico",
    "price_hidden": "$11,128.00",
    "coseguro": "$11,232.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662341",
    "description": "\u00c1CIDO SIALICO",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662367",
    "description": "\u00c1CIDOS BILIARES - s\u00e9ricos.",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662427",
    "description": "ADENOVIRUS, Ac. IgG o Totales, Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662435",
    "description": "ADENOVIRUS, Ac. IgM, Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662444",
    "description": "ADENOVIRUS, Ag.",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662495",
    "description": "Alfa 1 ANTITRIPSINA, CLEARENCE de (a1 AT - Clearence) - M.F. / s\u00e9rica.",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662657",
    "description": "ANAEROBIOS (Cultivo).",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662666",
    "description": "ANDROSTENEDIOL GLUCUR\u00d3NIDO (ALFA DIOL GLUCURONIDO)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662675",
    "description": "ANDROSTENEDIONA, Delta 4- (A4)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662709",
    "description": "ANTICOAGULANTE L\u00daPICO",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662734",
    "description": "ANT\u00cdGENO PROST\u00c1TICO ESPEC\u00cdFICO, Libre+Total (PSA-L+T)",
    "price_hidden": "$30,816.00",
    "coseguro": "$31,104.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662811",
    "description": "APOLIPOPROTEINA B (ApoB)",
    "price_hidden": "$9,416.00",
    "coseguro": "$9,504.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662846",
    "description": "ASPERGILLIUS, Ac. Anti-",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663025",
    "description": "Beta CROSS LAPS - CTX-C - TELOP\u00c9PTIDO DE COL\u00c1GENO TIPO I",
    "price_hidden": "$27,392.00",
    "coseguro": "$27,648.00",
    "bonos": "18",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663051",
    "description": "Beta LACTAMASA",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663068",
    "description": "BIOTINIDAZA, CONFIRMATORIO.",
    "price_hidden": "$102,720.00",
    "coseguro": "$103,680.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663093",
    "description": "BNP (FACTOR NATRIUR\u00c9TICO)",
    "price_hidden": "$81,320.00",
    "coseguro": "$82,080.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663102",
    "description": "BORDETELLA PERTUSIS, Ac. IgG Anti-",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663110",
    "description": "BORDETELLA PERTUSIS, Ac. IgM Anti-",
    "price_hidden": "$31,672.00",
    "coseguro": "$31,968.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663119",
    "description": "BORDETELLA PERTUSIS, Ag.",
    "price_hidden": "$34,240.00",
    "coseguro": "$34,560.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663128",
    "description": "BORRELLIA BUGDORFERI, Ac. IgG Anti-",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663136",
    "description": "BORRELLIA BUGDORFERI, Ac. IgM Anti-",
    "price_hidden": "$31,672.00",
    "coseguro": "$31,968.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663162",
    "description": "BRUCELOSIS (IFI)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663170",
    "description": "BRUCELOSIS (Fijaci\u00f3n de Complemento)",
    "price_hidden": "$4,280.00",
    "coseguro": "$4,320.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663179",
    "description": "BRUCELOSIS, Ac. IgG \u00f3 Totales Anti-",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663187",
    "description": "BRUCELOSIS, Ac. IgM Anti-",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663230",
    "description": "C1 INHIBIDOR (C1 INHIBIDOR INMUNOL\u00d3GICO)",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663239",
    "description": "CA 21 -1 (MARCADOR TUMORAL de PULM\u00d3N) - CYFRA 21-1",
    "price_hidden": "$51,360.00",
    "coseguro": "$51,840.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663247",
    "description": "CA 72-4 (MARCADOR TUMORAL G\u00c1STRICO)",
    "price_hidden": "$42,800.00",
    "coseguro": "$43,200.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663324",
    "description": "CANDIDA ALBICANS, Ac. Totales",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663384",
    "description": "CARDIOLIPINAS, Ac. IgA Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663392",
    "description": "CARDIOLIPINAS, Ac. IgG Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663401",
    "description": "CARDIOLIPINAS, Ac. IgM Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663538",
    "description": "CD, SUBPOBLACION LINFOCITARIA - Citometr\u00eda de Flujo (C/U)",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663546",
    "description": "CELULAS LE",
    "price_hidden": "$5,992.00",
    "coseguro": "$6,048.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663563",
    "description": "CENTROMERO, Ac. Anti-",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663572",
    "description": "CHAGAS, Ac. IgM Anti- (IFI)",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663589",
    "description": "CHLAMYDIA PNEUMONIAE, Ac. IgM Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663598",
    "description": "CHLAMYDIA PSITACCI, Ac. IgG Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663606",
    "description": "CHLAMYDIA PSITACCI, Ac. IgM Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663623",
    "description": "CHLAMYDIA TRACHOMATIS, Ac. IgG Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663632",
    "description": "CHLAMYDIA TRACHOMATIS, Ac. IgM Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663640",
    "description": "CHLAMYDIA TRACHOMATIS, Ag.",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663674",
    "description": "CICLOSPORINA A - s\u00e9rica",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663683",
    "description": "CISTINA",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663717",
    "description": "CITOMEGALOVIRUS, ANTIGENEMIA (CMV - PP65)",
    "price_hidden": "$38,520.00",
    "coseguro": "$38,880.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663734",
    "description": "CITOPLASMA DE NEUTROFILO, Ac. Anti- c/u (ANCA C, P - c/u)",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663786",
    "description": "COBALTO - plasm\u00e1tico",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663820",
    "description": "COBRE - urinario",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663862",
    "description": "COCCIDIOIDES INMITIS, Ac. IgG Anti-",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663871",
    "description": "COCCIDIOIDES INMITIS, Ac. IgM Anti-",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663922",
    "description": "COMPLEMENTO C1Q (PROTEINA 11S)",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663939",
    "description": "CONCENTRACI\u00d3N BACTERICIDA M\u00cdNIMA (CBM)",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663948",
    "description": "CONCENTRACION INHIBITORIA MINIMA (CIM)",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664008",
    "description": "CORTISOL LIBRE - urinario (CLU)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664050",
    "description": "COXIELLA BURNETTI, Ac. IgG Anti-",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664059",
    "description": "COXIELLA BURNETTI, Ac. IgM Anti-",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664068",
    "description": "COXSACKIE VIRUS A, 2-7-9, Ac. Anti- (c/u)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664076",
    "description": "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ag. (c/u)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664085",
    "description": "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ac. Anti- (pool)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664093",
    "description": "COXSACKIE VIRUS B, 1 -2-3-4-5-6, Ac. Anti- (c/u)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664102",
    "description": "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ac. IgM Anti- (c/u)",
    "price_hidden": "$19,688.00",
    "coseguro": "$19,872.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664136",
    "description": "CROMO (Cr) - urinario",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664256",
    "description": "CRYPTOSPORIDIUM Sp,",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664264",
    "description": "CRYPTOCOCCUS NEOFORMANS, Ag.",
    "price_hidden": "$34,240.00",
    "coseguro": "$34,560.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664375",
    "description": "DEOXIPIRIDINOLINAS (DPD)",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664418",
    "description": "DIMERO D",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664444",
    "description": "DIMETOXIFENILETILAMINA, 3,4- (DMFA)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664503",
    "description": "DOPAMINA, TOTAL - s\u00e9rica",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664512",
    "description": "DOPAMINA LIBRE - urinaria",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664623",
    "description": "",
    "price_hidden": "$42,800.00",
    "coseguro": "$43,200.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664632",
    "description": "ENDOMISIO, Ac. IgA Anti- (EMA IgA)",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664640",
    "description": "ENDOMISIO, Ac. IgG Anti- (EMA IgG)",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664734",
    "description": "ERITROPOYETINA (EPO)",
    "price_hidden": "$38,520.00",
    "coseguro": "$38,880.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664999",
    "description": "ESTEATOCRITO (Grasas - materia fecal)",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665093",
    "description": "FACTOR REUMATOIDEO (Nefelometr\u00eda)",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665102",
    "description": "FACTOR V LEIDEN - PCR",
    "price_hidden": "$64,200.00",
    "coseguro": "$64,800.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665119",
    "description": "FACTOR VON WILLEBRAND (Inmunol\u00f3gico)",
    "price_hidden": "$51,360.00",
    "coseguro": "$51,840.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665144",
    "description": "FENETILAMINA - F.E.A.",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665213",
    "description": "FENOLES - urinarios",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665230",
    "description": "FERRITINA",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665298",
    "description": "FK - 506 - Tacrolimus",
    "price_hidden": "$51,360.00",
    "coseguro": "$51,840.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665324",
    "description": "FOSFATASA ACIDA PROSTATICA (RIA)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665349",
    "description": "FOSFATASA ALCALINA OSEA (RIA)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665452",
    "description": "FOSFOLIPIDOS, Ac. IgG Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665461",
    "description": "FOSFOLIPIDOS, Ac. IgM Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665465",
    "description": "FOSFOLIPIDOS, Ac. Totales Anti- (IgA, IgG, IgM)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665478",
    "description": "FRUCTOSA, l\u00edquido seminal o s\u00e9rica o urinaria",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665503",
    "description": "GAD, Ac. Anti- Glutamico Acid Decarboxilase (\u00c1CIDO GLUT\u00c1MICO DESCARBOXILASA, Ac. Anti-)",
    "price_hidden": "$38,520.00",
    "coseguro": "$38,880.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665632",
    "description": "GLOBULINA LIGADORA DE ANDROGENOS Y ESTROGENOS (GLAE / SHBG)",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665743",
    "description": "HELICOBACTER PYLORI, Ac. IgA Anti-",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665751",
    "description": "HELICOBACTER PYLORI, Ac. IgG Anti-",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665760",
    "description": "HELICOBACTER PYLORI, Ac. IgM Anti-",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665777",
    "description": "HELICOBACTER PYLORI (Cultivo - Tipificaci\u00f3n).",
    "price_hidden": "$23,968.00",
    "coseguro": "$24,192.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665811",
    "description": "HEMOGLOBINA A2 (HbA2) (Cromatograf\u00eda/Intercambio I\u00f3nico)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665820",
    "description": "HEMOGLOBINA FETAL",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665888",
    "description": "HEPATITIS A, Ac. Anti- IgG (HVA IgG) o Ac. Totales (RIA o ELISA)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665896",
    "description": "HEPATITIS B, Ac. Anti- \"e\" (HBe Ac)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665905",
    "description": "HEPATITIS B, Ac. Anti- \"Core\" IgM (HBcM) - (RIA o ELISA)",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665914",
    "description": "HEPATITIS B, Carga viral",
    "price_hidden": "$158,360.00",
    "coseguro": "$159,840.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665931",
    "description": "HEPATITIS B, DNA viral (HBV-DNA) (PCR - Cualitativo)",
    "price_hidden": "$68,480.00",
    "coseguro": "$69,120.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665956",
    "description": "HEPATITIS C, Carga viral (PCR)",
    "price_hidden": "$158,360.00",
    "coseguro": "$159,840.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665965",
    "description": "HEPATITIS C, Genotipificaci\u00f3n (PCR)",
    "price_hidden": "$115,560.00",
    "coseguro": "$116,640.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665990",
    "description": "HEPATITIS DELTA, Ac. IgG \u00f3 Totales Anti-",
    "price_hidden": "$41,088.00",
    "coseguro": "$41,472.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666042",
    "description": "HERPES SIMPLEX 1, Ac. IgG \u00f3 Totales Anti-",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666050",
    "description": "HERPES SIMPLEX 1, Ac. IgM Anti-",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666059",
    "description": "HERPES SIMPLEX 2, Ac. IgA Anti-",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666067",
    "description": "HERPES SIMPLEX 2, Ac. IgG \u00f3 Totales Anti-",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666076",
    "description": "HERPES SIMPLEX 2, Ac. IgM Anti-",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666084",
    "description": "HERPES SIMPLEX, Ag.",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666170",
    "description": "HIDATIDOSIS, Ac. IgM Anti- (ELISA)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666173",
    "description": "HIDATIDOSIS, Ac. IgM Anti- (IFI)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666247",
    "description": "HISTOPLASMA CAPSULATUM, Ac. IgG Anti-",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666255",
    "description": "HISTOPLASMA CAPSULATUM, Ac. IgM Anti-",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666264",
    "description": "HIV - PCR Cualitativo",
    "price_hidden": "$68,480.00",
    "coseguro": "$69,120.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666272",
    "description": "HIV 1 ANTI-P-24 (core)",
    "price_hidden": "$29,104.00",
    "coseguro": "$29,376.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666275",
    "description": "HIV - P-24 (Antigenemia)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666278",
    "description": "HIV - P-24 - HIV 1 y 2 (Combo)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666281",
    "description": "HIV - RESISTENCIA A ANTIRETROVIRALES",
    "price_hidden": "$342,400.00",
    "coseguro": "$345,600.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666452",
    "description": "HOMOCISTEINA",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666537",
    "description": "HTLV-I/II (Part\u00edculas o ELISA)",
    "price_hidden": "$19,688.00",
    "coseguro": "$19,872.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666589",
    "description": "IgA BC - saliva - INMUNOGLOBULINA A Baja Concentraci\u00f3n en saliva.",
    "price_hidden": "$5,136.00",
    "coseguro": "$5,184.00",
    "bonos": "3",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666606",
    "description": "IgE ESPEC\u00cdFICA - INMUNOGLOBULINA E ESPEC\u00cdFICA.",
    "price_hidden": "$11,128.00",
    "coseguro": "$11,232.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666614",
    "description": "IgE RAST - INMUNOGLOBULINA E - para antibi\u00f3ticos (incluye Penicilinas)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666657",
    "description": "IgG - INMUNOGLOBULINA G, Subclases (Modulo 4 Subclases)",
    "price_hidden": "$94,160.00",
    "coseguro": "$95,040.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666708",
    "description": "INDICE de INSULINO RESISTENCIA",
    "price_hidden": "$11,556.00",
    "coseguro": "$11,664.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666725",
    "description": "INFLUENZA A, ANT\u00cdGENO (Ag.)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666734",
    "description": "INFLUENZA A, Ac. IgG Anti-",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666742",
    "description": "INFLUENZA A, Ac. IgM Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666751",
    "description": "INFLUENZA B, Ac. IgG Anti-",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666760",
    "description": "INFLUENZA B, Ac. IgM Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666768",
    "description": "INFLUENZA B, ANT\u00cdGENO (Ag.)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666862",
    "description": "INSULINA, Ac. Anti- (Ac. Anti- IAA)",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666896",
    "description": "IONOGRAMA - materia fecal",
    "price_hidden": "$5,992.00",
    "coseguro": "$6,048.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666898",
    "description": "IRREGULARES ANTICUERPOS, Identificaci\u00f3n.",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666905",
    "description": "ISLOTE LANGERHANS PANCRE\u00c1TICOS, Ac. Anti- (ICA)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666912",
    "description": "JO-1, Ac. Anti-",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666930",
    "description": "LA, Ac. Anti- (LA/SSB)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666936",
    "description": "LACTOFERRINA.",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666939",
    "description": "LACTOSA, TOLERANCIA A LA",
    "price_hidden": "$6,420.00",
    "coseguro": "$6,480.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666956",
    "description": "LEGIONELLA PNEUMOPHILA, Ac. IgG Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666990",
    "description": "LEPTOSPIRA, Ac. Anti- (ELISA / IFI)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666999",
    "description": "LEPTOSPIRA, Ac. Anti- (HAI / macroaglutinaci\u00f3n)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667007",
    "description": "LEPTOSPIRA, Ac. IgM Anti-",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667187",
    "description": "LIPOPROTEINA a - Lp(a)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667230",
    "description": "LISTERIA, CULTIVO",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667289",
    "description": "MACROPROLACTINEMIA",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667341",
    "description": "MANGANESO - s\u00e9rico",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667486",
    "description": "METOTREXATO",
    "price_hidden": "$34,240.00",
    "coseguro": "$34,560.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667503",
    "description": "MICROGLOBULINA BETA 2",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667537",
    "description": "MIOCARDIO, Ac. Anti-",
    "price_hidden": "$6,848.00",
    "coseguro": "$6,912.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667546",
    "description": "MIOGLOBINA - s\u00e9rica",
    "price_hidden": "$11,128.00",
    "coseguro": "$11,232.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667571",
    "description": "MITOCONDRIAL M2, Ac. Anti- (AMA M2)",
    "price_hidden": "$23,112.00",
    "coseguro": "$23,328.00",
    "bonos": "15",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667597",
    "description": "MOPEG (3-METOXI, 4-HIDROXI- FENIL ETIL GLICOL)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667631",
    "description": "MUSCULO ESTRIADO, Ac. Anti-",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667657",
    "description": "MYCOBACTERIA Sp, HEMOCULTIVO",
    "price_hidden": "$14,552.00",
    "coseguro": "$14,688.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667691",
    "description": "MYCOPLASMA - UREAPLASMA, Ac. Anti-",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667700",
    "description": "MYCOPLASMA - UREAPLASMA, CULTIVO",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667708",
    "description": "MYCOPLASMA HOMINIS, CULTIVO - Aislamiento",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667717",
    "description": "MYCOPLASMA PNEUMONIAE, Ac. IgM Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667725",
    "description": "MYCOPLASMA PNEUMONIAE, ANT\u00cdGENO (Ag)",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667742",
    "description": "N,N-DIMETILTRIPTAMINA",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667751",
    "description": "NEONATAL, 1 7-HIDROXIPROGESTERONA (1 7-HO-Pg-Neo)",
    "price_hidden": "$7,704.00",
    "coseguro": "$7,776.00",
    "bonos": "5",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667759",
    "description": "NEONATAL, BIOTINIDASA",
    "price_hidden": "$5,992.00",
    "coseguro": "$6,048.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667768",
    "description": "NEONATAL, GALACTOSEMIA",
    "price_hidden": "$5,992.00",
    "coseguro": "$6,048.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667773",
    "description": "NEONATAL, LEUCINA",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667777",
    "description": "NEONATAL, T.I.R. (TRIPSINA INMUNOREATIVA)",
    "price_hidden": "$6,848.00",
    "coseguro": "$6,912.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667785",
    "description": "NEONATAL, T.S.H.",
    "price_hidden": "$5,992.00",
    "coseguro": "$6,048.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667845",
    "description": "NORMETANEFRINA - urinaria",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667853",
    "description": "NORTRIPTILINA - s\u00e9rica",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667862",
    "description": "N TELOP\u00c9PTIDOS - COL\u00c1GENO TIPO I (NTX)",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667913",
    "description": "ORTO METIL BUFOTENINA",
    "price_hidden": "$20,544.00",
    "coseguro": "$20,736.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667939",
    "description": "OSTEOCALCINA",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667947",
    "description": "OVARIO, Ac. Anti-",
    "price_hidden": "$68,480.00",
    "coseguro": "$69,120.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668127",
    "description": "PARACOCCIDIOIDES SPP, Ac. Anti- Totales",
    "price_hidden": "$24,824.00",
    "coseguro": "$25,056.00",
    "bonos": "16",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668135",
    "description": "PARAINFLUENZA I, Ac. Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668144",
    "description": "PARAINFLUENZA II, Ac. IgM Anti-",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668153",
    "description": "PARAINFLUENZA III, Ag.",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668161",
    "description": "PARATHORMONA (PTH) (MOLECULA MEDIA)",
    "price_hidden": "$16,264.00",
    "coseguro": "$16,416.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668178",
    "description": "PAROTIDITIS, Ac. IgG Anti-",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668187",
    "description": "PAROTIDITIS, Ac. IgM Anti-",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668229",
    "description": "PARVOVIRUS, Ac. IgG Anti-",
    "price_hidden": "$34,240.00",
    "coseguro": "$34,560.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668238",
    "description": "PARVOVIRUS, Ac. IgM Anti-",
    "price_hidden": "$38,520.00",
    "coseguro": "$38,880.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668281",
    "description": "PEPTIDO C",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668284",
    "description": "P\u00c9PTIDO CITRULINADO CICLICO - Ac. Anti- IgG (Ac. Anti- CCP / PCC)",
    "price_hidden": "$42,800.00",
    "coseguro": "$43,200.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668315",
    "description": "PEROXIDASA TIROIDEO, Ac. Anti- (ATPO / TPO)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668383",
    "description": "PLASMIN\u00d3GENO",
    "price_hidden": "$32,528.00",
    "coseguro": "$32,832.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668486",
    "description": "PORFIRINAS - s\u00e9ricas",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668529",
    "description": "PORFOBILIN\u00d3GENO (Cuantitativo) - urinario",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668546",
    "description": "PREALB\u00daMINA",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668580",
    "description": "PROGESTERONA 1 7-HIDROXI (1 7-OH-Pg)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668623",
    "description": "PROTE\u00cdNA C REACTIVA - ULTRASENSIBLE (PCRus)",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668631",
    "description": "PROTE\u00cdNA S Libre = Inmunoturbidim\u00e9trio",
    "price_hidden": "$38,520.00",
    "coseguro": "$38,880.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668640",
    "description": "PROTE\u00cdNA S Total",
    "price_hidden": "$38,520.00",
    "coseguro": "$38,880.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668802",
    "description": "RECEPTOR de TSH, Ac. Anti- (TRAB's o TRAB o TBII)",
    "price_hidden": "$34,240.00",
    "coseguro": "$34,560.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668836",
    "description": "RETICULINA, Ac. Anti- (ARA)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668896",
    "description": "RNP, Ac. Anti- (RIBONUCLEOPROTEINAS)",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668905",
    "description": "Ro, Ac. Anti- (Ro/SSA)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668939",
    "description": "ROTAVIRUS, Ag.",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668982",
    "description": "SARAMPION, Ac. IgG Anti-",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668990",
    "description": "SARAMPION, Ac. IgM Anti-",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668999",
    "description": "SCLERODERMIA - SCL 70, Ac. Anti-",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669016",
    "description": "SELENIO (AA) - s\u00e9rico",
    "price_hidden": "$17,120.00",
    "coseguro": "$17,280.00",
    "bonos": "11",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669041",
    "description": "SEROTONINA - plaquetaria",
    "price_hidden": "$102,720.00",
    "coseguro": "$103,680.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669076",
    "description": "SINCICIAL RESPIRATORIO, Ac. IgG Anti-",
    "price_hidden": "$14,552.00",
    "coseguro": "$14,688.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669084",
    "description": "SINCICIAL RESPIRATORIO, Ac. IgM Anti-",
    "price_hidden": "$14,552.00",
    "coseguro": "$14,688.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669093",
    "description": "SINCICIAL RESPIRATORIO, ANTIGENO (Ag.)",
    "price_hidden": "$18,832.00",
    "coseguro": "$19,008.00",
    "bonos": "12",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669110",
    "description": "SM, Ac. Anti-",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669118",
    "description": "SOMATOMEDINA C- IGFB1",
    "price_hidden": "$29,960.00",
    "coseguro": "$30,240.00",
    "bonos": "19",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669127",
    "description": "SREPTOCOCCUS BETA-HEMOL\u00cdTICO Grupo B - Prenatal (anal/vaginal)",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669223",
    "description": "SUDOR, TEST CONFIRMATORIO.",
    "price_hidden": "$42,800.00",
    "coseguro": "$43,200.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669366",
    "description": "TESTOSTERONA DEHIDRO (DHT)",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669375",
    "description": "TESTOSTERONA LIBRE (To-L)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669409",
    "description": "TIOCIANATOS - urinarios",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669417",
    "description": "TIOCIANATOS - s\u00e9ricos",
    "price_hidden": "$10,272.00",
    "coseguro": "$10,368.00",
    "bonos": "7",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669443",
    "description": "TIROGLOBULINA (TGs)",
    "price_hidden": "$12,840.00",
    "coseguro": "$12,960.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669477",
    "description": "TIROSINA (Amino\u00e1cido - A. \u00c1c.)",
    "price_hidden": "$13,696.00",
    "coseguro": "$13,824.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669511",
    "description": "TOXOCARA CANIS, Ac. IgG Anti-",
    "price_hidden": "$22,256.00",
    "coseguro": "$22,464.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669571",
    "description": "TOXOPLASMOSIS, Ac. IgG Anti- (ELISA)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669580",
    "description": "TOXOPLASMOSIS, Ac. IgM Anti- (ELISA)",
    "price_hidden": "$11,984.00",
    "coseguro": "$12,096.00",
    "bonos": "8",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669588",
    "description": "TOXOPLASMOSIS, Ac. IgM Anti- (IFI)",
    "price_hidden": "$6,848.00",
    "coseguro": "$6,912.00",
    "bonos": "4",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669622",
    "description": "TRANSGLUTAMINASA, Ac. IgA Anti- (TGA)",
    "price_hidden": "$19,688.00",
    "coseguro": "$19,872.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669631",
    "description": "TRANSGLUTAMINASA, Ac. IgG Anti- (TGG)",
    "price_hidden": "$19,688.00",
    "coseguro": "$19,872.00",
    "bonos": "13",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669661",
    "description": "TRIIODOTIRONINA Libre (T3L)",
    "price_hidden": "$8,560.00",
    "coseguro": "$8,640.00",
    "bonos": "6",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669691",
    "description": "TRIPTOFANO",
    "price_hidden": "$15,408.00",
    "coseguro": "$15,552.00",
    "bonos": "10",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669725",
    "description": "TROPONINA I -TnI",
    "price_hidden": "$14,552.00",
    "coseguro": "$14,688.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669734",
    "description": "TROPONINA T (cualitativo) - TnT-cuali",
    "price_hidden": "$14,552.00",
    "coseguro": "$14,688.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669759",
    "description": "UREAPLASMA UREAL\u00cdTICUM (Cultivo).",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669810",
    "description": "VARICELA ZOSTER, Ac. IgM Anti-",
    "price_hidden": "$21,400.00",
    "coseguro": "$21,600.00",
    "bonos": "14",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669819",
    "description": "VARICELA ZOSTER, Ac. IgG Anti-",
    "price_hidden": "$14,552.00",
    "coseguro": "$14,688.00",
    "bonos": "9",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669828",
    "description": "VARICELA ZOSTER, Ag.",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669879",
    "description": "VITAMINA B1 (TIAMINA)",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669887",
    "description": "VITAMINA B6 (PIRIDOXINA)",
    "price_hidden": "$31,672.00",
    "coseguro": "$31,968.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669896",
    "description": "VITAMINA C (l\u00edquido seminal)",
    "price_hidden": "$25,680.00",
    "coseguro": "$25,920.00",
    "bonos": "17",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669913",
    "description": "VITAMINA D3 (25-HIDROXICALCIFEROL O COLECALCIFEROL)",
    "price_hidden": "$31,672.00",
    "coseguro": "$31,968.00",
    "bonos": "20",
    "source": "BIOQUIMICA"
  },
  {
    "code": "N/T",
    "description": "Autorizaci\u00f3n sujeta a Norman T\u00e9cnicas NBU",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "P/P",
    "description": "Valor a definir por presupuesto",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669747",
    "description": "TUMOR, Necrosis Factor",
    "price_hidden": "",
    "coseguro": "",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "Anexo",
    "description": "IV: Pr\u00e1cticas de Nomenclador Bioqu\u00edmico Versi\u00f3n 2012 de Baja Frecuencia (facturaci\u00f3n",
    "price_hidden": "por Fuera",
    "coseguro": "de Cartera-",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "C\u00f3digo",
    "description": "Determinaci\u00f3n OCT",
    "price_hidden": "2025 NOV",
    "coseguro": "2025",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662008",
    "description": "ACANTHAMOEBA SPP. $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662009",
    "description": "ACANTHAMOEBA - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662011",
    "description": "\u00c1CAROS y ARTR\u00d3PODOS, Investigaci\u00f3n de vectores $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662102",
    "description": "\u00c1CIDO ALFA CET\u00d3NICO $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662119",
    "description": "\u00c1CIDO C\u00cdTRICO - plasm\u00e1tico $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662120",
    "description": "\u00c1CIDO C\u00cdTRICO - urinario $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662252",
    "description": "\u00c1CIDO M\u00c1LICO $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662307",
    "description": "\u00c1CIDO PERCL\u00d3RICO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662328",
    "description": "\u00c1CIDO SALIC\u00cdLICO - s\u00e9rico $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662330",
    "description": "\u00c1CIDO SALIC\u00cdLICO - urinario $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662346",
    "description": "\u00c1CIDO SUCC\u00cdNICO $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662379",
    "description": "\u00c1CIDOS GRASOS NO ESTERIFICADOS (NEFA) $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662405",
    "description": "ACTINA AC (AAC) - IFI P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662410",
    "description": "ACUAPORINA 4 - Neuromielitis Optica-Ac. IgG (NMO-Ac. IgG) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662446",
    "description": "ADENOVIRUS - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662448",
    "description": "ADENOVIRUS - Carga viral $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662461",
    "description": "ALDOSTERONA - urinaria $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662508",
    "description": "Alfa 1 GLUCOPROTEINA ACIDA (OROSOMUCOIDE) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662561",
    "description": "Alfa MANOSIDASA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662563",
    "description": "Alfa NITROSO BETA NAFTOL, PRUEBA de $7,704.00",
    "price_hidden": "$7,776.00",
    "coseguro": "$7,857.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662704",
    "description": "ANION GAP $856.00",
    "price_hidden": "$864.00",
    "coseguro": "",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662706",
    "description": "ANTIBIOGRAMA - AUTOMATIZADO $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662739",
    "description": "ANTIGENOS - PANEL GINECOL\u00d3GICO - PCR (Chamydia trachomatis / Mycoplasma $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662743",
    "description": "ANTIGENOS VIRALES - PANEL de DIARREICOS - PCR $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662745",
    "description": "ANTIGENOS VIRALES - PANEL de RESPIRATORIOS -B\u00c1SICO $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662749",
    "description": "ANTIGENOS VIRALES - PANEL de RESPIRATORIOS - PCR B\u00c1SICO $154,080.00",
    "price_hidden": "$155,520.00",
    "coseguro": "$157,140.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662751",
    "description": "ANTIGENOS VIRALES - PANEL de RESPIRATORIOS - PCR EXTENDIDO $196,880.00",
    "price_hidden": "$198,720.00",
    "coseguro": "$200,790.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662810",
    "description": "APOLIPOPROTEINA A (ApoA) $9,416.00",
    "price_hidden": "$9,504.00",
    "coseguro": "$9,603.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662822",
    "description": "ARILSULTASA A - s\u00e9rica $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662852",
    "description": "AUTOHEM\u00d3LISIS, PRUEBA DE $3,424.00",
    "price_hidden": "$3,456.00",
    "coseguro": "$3,492.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "662858",
    "description": "BACTERIAS RESISTENTES A CARBAPENEMES - PCR o similar $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663062",
    "description": "Beta MANOSIDASA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663065",
    "description": "BICARBONATO, en orina $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663067",
    "description": "BIOTINA $102,720.00",
    "price_hidden": "$103,680.00",
    "coseguro": "$104,760.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663076",
    "description": "BLADER TEST ANT\u00cdGENO - NMP22 (B.T.A.) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663120",
    "description": "BORDETELLA PERTUSIS - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663141",
    "description": "BRCA 1 BRCA 2, GRANDES DELECCIONES Y DUPLICACIONES (MLPA) $856,000.00",
    "price_hidden": "$864,000.00",
    "coseguro": "$873,000.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663143",
    "description": "BRCA 1 BRCA 2, SECUENCIACI\u00d3N COMPLETA $1,712,000.00",
    "price_hidden": "$1,728,000.00",
    "coseguro": "$1,746,000.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663147",
    "description": "BRCA 1-2, PANEL ASHKENAZI - SEFARADI $385,200.00",
    "price_hidden": "$388,800.00",
    "coseguro": "$392,850.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663158",
    "description": "BRUCELLAS, TEST DE WRIGHT $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663159",
    "description": "BRUCELLAS, TEST DE WRIGHT, con 2-Mercaptoetanol (W-2ME) $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663190",
    "description": "BRUCELOSIS, Ac. Incompletos Anti- $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663254",
    "description": "CADENA LIVIANA KAPPA, LIBRE (Nefelometr\u00eda) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663259",
    "description": "CADENAS PESADAS EN SANGRE Y ORINA C/U $34,240.00",
    "price_hidden": "$34,560.00",
    "coseguro": "$34,920.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663273",
    "description": "CALCIDIOIDEMICOSIS - Inmunodif. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663310",
    "description": "CALPROTECTINA (CPMF) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663316",
    "description": "CAMPYLOBACTER SPP, Cultivo P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663320",
    "description": "CAMPYLOBACTER SPP, Directo (Microscop\u00eda) $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663333",
    "description": "CANDIDA, ELECTROFORESIS DE CAMP P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663375",
    "description": "CARBOXIHEMOGLOBINA $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663543",
    "description": "CELULARIDAD en l\u00e1grimas $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663571",
    "description": "CHAGAS, Ac. IgM Anti- (ELISA) $11,984.00",
    "price_hidden": "$12,096.00",
    "coseguro": "$12,222.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663576",
    "description": "CHAGAS, (PCR) $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663582",
    "description": "CHIKUNGUNYA , virus (PCR) $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663591",
    "description": "CHLAMYDIA PNEUMONIAE - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663609",
    "description": "CHLAMYDIA PSITACCI - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663650",
    "description": "CHLAMYDIA TRACHOMATIS, cultivo celular $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663651",
    "description": "CHLAMYDIA TRACHOMATIS - LCR P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663657",
    "description": "CHOLERAE VIBRIO, CULTIVO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663751",
    "description": "CLEMENTS, Prueba de $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663762",
    "description": "CLOSTRIDIUM DIFFICILE, Toxinas (A + B) - Materia Fecal (Inmunocromatograf\u00eda) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663837",
    "description": "COCCIDIOIDES INMITIS, Ac. Anti- BANDA F P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663845",
    "description": "COCCIDIOIDES INMITIS, Ac. Anti- BANDA TP P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663854",
    "description": "COCCIDIOIDES INMITIS, Ac. Anti- CIE P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663910",
    "description": "COLESTEROL NO HDL $4,708.00",
    "price_hidden": "$4,752.00",
    "coseguro": "$4,801.50",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663926",
    "description": "COMPLEMENTO C2 P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663953",
    "description": "$65,912.00",
    "price_hidden": "$66,528.00",
    "coseguro": "$67,221.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663955",
    "description": "CONEXINA 26 - SECUENCIACI\u00d3N - PCR $98,440.00",
    "price_hidden": "$99,360.00",
    "coseguro": "$100,395.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663960",
    "description": "COPROPORFIRINAS - eritrocitarias $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "663982",
    "description": "CORP\u00daSCULOS METACROM\u00c1TICOS - urinario $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664002",
    "description": "CORTEX ADRENAL, Ac. ANTI- (A.A.C.A) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664012",
    "description": "CORTISOL - salival $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664105",
    "description": "CREATINA - s\u00e9rica $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664106",
    "description": "CREATINA - urinaria $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664110",
    "description": "CRIOCRITO $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664119",
    "description": "CRIOFIBRIN\u00d3GENO $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664125",
    "description": "CRISTALIZACI\u00d3N en l\u00e1grimas $5,992.00",
    "price_hidden": "$6,048.00",
    "coseguro": "$6,111.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664266",
    "description": "CRYPTOCOCCUS NEOFORMANS, Ag. (Microscop\u00eda -Tinta china) $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664290",
    "description": "CUERPOS REDUCTORES $5,992.00",
    "price_hidden": "$6,048.00",
    "coseguro": "$6,111.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664340",
    "description": "DEHIDROEPIANDROSTERONA $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664370",
    "description": "DENGUE - SEROTIPIFICACI\u00d3N $111,280.00",
    "price_hidden": "$112,320.00",
    "coseguro": "$113,490.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664600",
    "description": "ELASTASA PANCRE\u00c1TICA $102,720.00",
    "price_hidden": "$103,680.00",
    "coseguro": "$104,760.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664615",
    "description": "EMBRIOTOXICIDAD, BIOENSAYO. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664668",
    "description": "ENDRIN ALDEHIDO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664682",
    "description": "ENTEROCOCOS VANCOMICINA RESISTENTE - PCR $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664728",
    "description": "EPSTEIN BARR, detecci\u00f3n cualitativa - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664738",
    "description": "ESCHERICHIA COLI - ENTEROPAT\u00d3GENA - PCR $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664749",
    "description": "ESPERMA, Ac. Anti- ESPERMATOZOIDES (DIRECTO) $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664755",
    "description": "ESPERMA, Ac. Anti- ESPERMATOZOIDES (INDIRECTO) $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664775",
    "description": "ESPERMA, C\u00c9LULAS REDONDAS CON DIFERENCIACI\u00d3N DE PEROXIDASAS $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664778",
    "description": "ESPERMA, C\u00c9LULAS REDONDAS TOTALES EN SEMEN $4,280.00",
    "price_hidden": "$4,320.00",
    "coseguro": "$4,365.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664793",
    "description": "ESPERMA, CONDENSACI\u00d3N NUCLEAR DE LA CROMATINA (Azul Anilina, Tinci\u00f3n) $21,400.00",
    "price_hidden": "$21,600.00",
    "coseguro": "$21,825.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664811",
    "description": "ESPERMA, DIGESTI\u00d3N EN GELATINA ACROS\u00d3MICA $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664823",
    "description": "ESPERMA, ESPERMATOZOIDES EN ORINA, ESTUDIO DE RETROEYACULACI\u00d3N $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664825",
    "description": "ESPERMA, ESPERMATOZOIDES DE ORINA, RECUPERACI\u00d3N PARA SELECCI\u00d3N $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664827",
    "description": "ESPERMA, ESPERMATOZOIDES DE ORINA, RECUPERACI\u00d3N PARA SELECCI\u00d3N EN $102,720.00",
    "price_hidden": "$103,680.00",
    "coseguro": "$104,760.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664838",
    "description": "ESPERMA, HETEROGENEIDAD CROMAT\u00cdNICA (NARANJA DE ACRIDINA) $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664846",
    "description": "ESPERMA, INDICE DE TERATOZOOSPERMIA $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664860",
    "description": "ESPERMA - MODULO II $91,592.00",
    "price_hidden": "$92,448.00",
    "coseguro": "$93,411.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664868",
    "description": "ESPERMA, MORFOLOG\u00cdA CRITERIO ESTRICTO (OMS 2010 - MORFOLOG\u00cdA $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664878",
    "description": "ESPERMA, PRUEBA DE SOBREVIDA ESPERM\u00c1TICA $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664889",
    "description": "ESPERMA, RECUENTO DE ESPERMATOZOIDES $5,136.00",
    "price_hidden": "$5,184.00",
    "coseguro": "$5,238.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664923",
    "description": "ESPERMA, SELECCI\u00d3N DE GRADIENTES (DIAGN\u00d3STICO) $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664930",
    "description": "ESPERMA, SELECCI\u00d3N DE GRADIENTES (INSEMINACI\u00d3N) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664941",
    "description": "ESPERMA, SWIM UP (DIAGN\u00d3STICO) $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664949",
    "description": "ESPERMA, SWIM UP (INSEMINACI\u00d3N) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664964",
    "description": "ESPERMA, TEST DE FRAGMENTACI\u00d3N DE ADN ESPERM\u00c1TICO $94,160.00",
    "price_hidden": "$95,040.00",
    "coseguro": "$96,030.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664971",
    "description": "ESPERMA, TEST DE HIPERACTIVACI\u00d3N $18,832.00",
    "price_hidden": "$19,008.00",
    "coseguro": "$19,206.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664978",
    "description": "ESPERMA, TEST DE MOST $64,200.00",
    "price_hidden": "$64,800.00",
    "coseguro": "$65,475.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "664985",
    "description": "ESPERMA, TEST HIPOSM\u00d3TICO $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665050",
    "description": "EUGLOBULINAS, LISIS de (pre y post-isquemia) $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665132",
    "description": "FELBAMATO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665222",
    "description": "FENTANILO - urinario $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665238",
    "description": "FIBRIN\u00d3GENO, PRODUCTOS DE DEGRADACI\u00d3N (P.D.F.) - urinario $25,680.00",
    "price_hidden": "$25,920.00",
    "coseguro": "$26,190.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665258",
    "description": "FIBROSIS QU\u00cdSTICA, 32 MUTACIONES - PCR $398,040.00",
    "price_hidden": "$401,760.00",
    "coseguro": "$405,945.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665265",
    "description": "FIBROSIS QUISTICA, DF508 $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665300",
    "description": "FLAVIVIRUS $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665319",
    "description": "FOSFATASA \u00c1CIDA LEUCOCITARIA $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665332",
    "description": "FOSFATASA \u00c1CIDA TARTRATO RESISTENTE $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665335",
    "description": "FOSFATASA \u00c1CIDA TARTRATO RESISTENTE LEUC. $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665443",
    "description": "FOSFOHEXOSA ISOMERASA, S\u00e9rica - PHI $5,136.00",
    "price_hidden": "$5,184.00",
    "coseguro": "$5,238.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665486",
    "description": "FSH, Urinaria (HORMONA FOL\u00cdCULO ESTIMULANTE -Urinaria) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665494",
    "description": "GABAPENTINA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665508",
    "description": "GALACTOMANANO de ASPERGILLUS, Ag. $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665555",
    "description": "GENOTIPO de Rho (c/u) $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665589",
    "description": "GLICEROL, s\u00e9rico. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665597",
    "description": "GLICINA (HPLC) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665621",
    "description": "GLICOSAMINOGLICANOS, cuantitativo $59,920.00",
    "price_hidden": "$60,480.00",
    "coseguro": "$61,110.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665640",
    "description": "GLOBULINA LIGADORA DE CORTICOIDES (CBG) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665644",
    "description": "GLOBULINA TRANSPORTADORA DE TIROXINA (TBG) $35,952.00",
    "price_hidden": "$36,288.00",
    "coseguro": "$36,666.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665687",
    "description": "HAEMOPHILUS INFLUENZA, Ac. IgM Anti- $34,240.00",
    "price_hidden": "$34,560.00",
    "coseguro": "$34,920.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665715",
    "description": "HAM, PRUEBA DE $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665768",
    "description": "HELICOBACTER PYLORI, Aire espirado P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665780",
    "description": "HEMAT\u00cdES, PRUEBA ELUSI\u00d3N \u00c1CIDA DE $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665787",
    "description": "HEMOCROMATOSIS, MUTACI\u00d3N Gen C282Y - PCR $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665789",
    "description": "HEMOCROMATOSIS, MUTACI\u00d3N Gen H63D - PCR $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665791",
    "description": "HEMOCROMATOSIS, MUTACI\u00d3N Gen S65C - PCR $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665802",
    "description": "HEMOGLOBINA A1 (Hb-A1) Electroforesis $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665828",
    "description": "HEMOGLOBINA S $7,704.00",
    "price_hidden": "$7,776.00",
    "coseguro": "$7,857.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665845",
    "description": "HEMOPEXINA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665854",
    "description": "HEMOSIDERINURIA $7,704.00",
    "price_hidden": "$7,776.00",
    "coseguro": "$7,857.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665868",
    "description": "HEPARINA, Ac. Anti- (PFA4) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665879",
    "description": "HEP\u00c1TICOS, AUTOANTICUERPOS (panel) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665939",
    "description": "HEPATITIS C, Ac. Anti- IgM $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "665945",
    "description": "HEPATITIS C, Ant\u00edgeno $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666011",
    "description": "HEPATITIS E - PCR $107,000.00",
    "price_hidden": "$108,000.00",
    "coseguro": "$109,125.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666038",
    "description": "HERPES SIMPLEX, 1 / 2 - TIPIFICACI\u00d3N - PCR $111,280.00",
    "price_hidden": "$112,320.00",
    "coseguro": "$113,490.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666098",
    "description": "HERPES VIRUS 6 HUMAN - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666100",
    "description": "HERPES VIRUS 6 HUMAN - Carga Viral $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666117",
    "description": "HERPES VIRUS 8 - Ac. IgG Anti- HHV $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666118",
    "description": "HERPES VIRUS 8 - Ac. IgM Anti- HHV $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666120",
    "description": "HERPES VIRUS 8 - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666196",
    "description": "HIDROLASAS \u00c1CIDAS EN LEUCOCITOS P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666209",
    "description": "HIERRO, M\u00e9dula Osea (MO) - TINCI\u00d3N DE PERLS. $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666211",
    "description": "HIERRO, TINCI\u00d3N DE $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666213",
    "description": "HIERRO - Urinario $3,424.00",
    "price_hidden": "$3,456.00",
    "coseguro": "$3,492.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666284",
    "description": "HIV - RESISTENCIA A INHIBIDORES DE INTEGRASA $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666337",
    "description": "HLA-B 5701 GENOTIPO, ABACAVIR HIPERSENSIBILIDAD, sangre $171,200.00",
    "price_hidden": "$172,800.00",
    "coseguro": "$174,600.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666443",
    "description": "HLA DQA1, DQB1 (DIABETES) PCR $136,960.00",
    "price_hidden": "$138,240.00",
    "coseguro": "$139,680.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666445",
    "description": "HLA DQ2-DQ8 (CELIAQUIA) PCR $136,960.00",
    "price_hidden": "$138,240.00",
    "coseguro": "$139,680.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666455",
    "description": "HOMOCISTINA, Orina $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666486",
    "description": "HOWELL, TEST (Plasma recalcificado, tiempo de-) $4,280.00",
    "price_hidden": "$4,320.00",
    "coseguro": "$4,365.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666570",
    "description": "IDENTIFICACI\u00d3N MICROBIOL\u00d3GICA AUTOMATIZADA. $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666572",
    "description": "IDENTIFICACI\u00d3N MICROBIOL\u00d3GICA POR PCR. $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666587",
    "description": "IgA BC - LCR - INMUNOGLOBULINA A Baja Concentraci\u00f3n en L\u00edquido C\u00e9falo Raqu\u00eddeo. $5,136.00",
    "price_hidden": "$5,184.00",
    "coseguro": "$5,238.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666597",
    "description": "IgE BC - INMUNOGLOBULINA E Baja Concentraci\u00f3n. $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666602",
    "description": "IgE BC - LCR - INMUNOGLOBULINA E Baja Concentraci\u00f3n en L\u00edquido C\u00e9falo Raqu\u00eddeo. $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666634",
    "description": "IgG - INMUNOGLOBULINA G, ASOCIADA A PLAQUETAS. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666652",
    "description": "IgG - INMUNOGLUBULINA G, INTOLERANCIA ALIMENTICIA (c/u) $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666666",
    "description": "IgM - INMUNOGLOBULINA M, ASOCIADA A PLAQUETAS. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666674",
    "description": "IgM, LCR - INMUNOGLOBULINA M, en L\u00edquido C\u00e9falo Raqu\u00eddeo. $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666676",
    "description": "IgM - INMUNOGLOBULINA M Baja Concentraci\u00f3n, en saliva $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666691",
    "description": "IL2-R - CD25 receptor soluble P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666700",
    "description": "INDICAN $4,280.00",
    "price_hidden": "$4,320.00",
    "coseguro": "$4,365.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666711",
    "description": "INDICE de FUNCI\u00d3N RENAL $2,568.00",
    "price_hidden": "$2,592.00",
    "coseguro": "$2,619.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666713",
    "description": "INDICE de LESI\u00d3N RENAL (ABUMINA / CREATININA) -urinario $13,268.00",
    "price_hidden": "$13,392.00",
    "coseguro": "$13,531.50",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666714",
    "description": "INDICE de LESI\u00d3N RENAL (PROTEINAS / CREATININA) -urinario $3,852.00",
    "price_hidden": "$3,888.00",
    "coseguro": "$3,928.50",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666717",
    "description": "INDICE de PRODUCCI\u00d3N RETICULOCITARIA $4,280.00",
    "price_hidden": "$4,320.00",
    "coseguro": "$4,365.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666720",
    "description": "INDICE de RESORCI\u00d3N OSEA $4,280.00",
    "price_hidden": "$4,320.00",
    "coseguro": "$4,365.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666722",
    "description": "INDICE de RIESGO CARDIOVACULAR $1,712.00",
    "price_hidden": "$1,728.00",
    "coseguro": "$1,746.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666728",
    "description": "INFLUENZA A, ANTIGENOS (Ags.) - Material: hisopado nasal / far\u00edngeo / aspirados - PCR $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666732",
    "description": "INFLUENZA A, ANTIGENOS (Ags.) Suptipo H1N1 -Material: hisopado nasal / far\u00edngeo / $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666856",
    "description": "INMUNOMARCACI\u00d3N EN SANGRE PERIF\u00c9RICA. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666888",
    "description": "IODO-AZIDA Prueba de $7,704.00",
    "price_hidden": "$7,776.00",
    "coseguro": "$7,857.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666919",
    "description": "KETAMINA - urinaria $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666932",
    "description": "LACTOCRITO $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666947",
    "description": "LC-1, Ac. Anti- $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666970",
    "description": "LEGIONELLA PNEUMOPHILA, Ag. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666975",
    "description": "LEISHMANIA, Ac. Anti- $21,400.00",
    "price_hidden": "$21,600.00",
    "coseguro": "$21,825.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "666978",
    "description": "LEISHMANIA - PCR $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667027",
    "description": "LEUCINA - s\u00e9rica (AA) (incluida en el perfil de AA en diferentes matrices - Cromatograf\u00eda P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667059",
    "description": "LEVADURAS SENSIBILIDAD - SCREENING P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667093",
    "description": "LEVULOSA - semen P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667096",
    "description": "LEVULOSA - s\u00e9rica P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667099",
    "description": "LEVULOSA - urinaria P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667127",
    "description": "LINFOCITARIO, CULTIVO MIXTO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667153",
    "description": "LINFOCITOS PERIF\u00c9RICOS \"SRY\" P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667170",
    "description": "LIPASA - urinaria (Lipasuria) $3,424.00",
    "price_hidden": "$3,456.00",
    "coseguro": "$3,492.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667210",
    "description": "LISOZIMA $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667240",
    "description": "LISTERIA, Ac. IgM Anti- $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667242",
    "description": "LISTERIA - PCR $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667260",
    "description": "LIXITOL $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667262",
    "description": "LKM, Ac. Anti- $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667270",
    "description": "LYNCH, SINDROME DE - GEN MLH1 (MYH) $1,968,800.00",
    "price_hidden": "$1,987,200.00",
    "coseguro": "$2,007,900.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667271",
    "description": "LYNCH, SINDROME DE - GEN MSH2 SECUENCIACI\u00d3N COMPLETA (M2Y) $1,369,600.00",
    "price_hidden": "$1,382,400.00",
    "coseguro": "$1,396,800.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667273",
    "description": "LYNCH, SINDROME DE - GEN MSH6 (M6Y) $1,540,800.00",
    "price_hidden": "$1,555,200.00",
    "coseguro": "$1,571,400.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667274",
    "description": "LYNCH, SINDROME DE - GEN PMS2 (M3Y) $1,583,600.00",
    "price_hidden": "$1,598,400.00",
    "coseguro": "$1,615,050.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667275",
    "description": "LYNCH, SINDROME DE - GEN (MLH1, MSH2, MSH6, PMS2) $4,879,200.00",
    "price_hidden": "$4,924,800.00",
    "coseguro": "$4,976,100.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667284",
    "description": "MACRO CK $11,984.00",
    "price_hidden": "$12,096.00",
    "coseguro": "$12,222.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667366",
    "description": "MEMBRANA BASAL, Ac. Anti- $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667409",
    "description": "METAHEMOGLOBINA $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667439",
    "description": "METAPNEUMOVIRUS HUMANO, Ag. (hMPV) $34,240.00",
    "price_hidden": "$34,560.00",
    "coseguro": "$34,920.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667440",
    "description": "METAPNEUMOVIRUS HUMANO, Ag. (hMPV) - PCR $81,320.00",
    "price_hidden": "$82,080.00",
    "coseguro": "$82,935.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667469",
    "description": "M ETILNICOTINAMIDA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667489",
    "description": "MICOLOG\u00cdA, CULTIVO DE HONGOS PRODUCTORES DE MICOSIS PROFUNDAS O $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667490",
    "description": "MICOLOG\u00cdA, IDENTIFICACI\u00d3N DE HONGOS PRODUCTORES DE MICOSIS $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667491",
    "description": "MICOLOG\u00cdA, PRUEBA DE SENSIBILIDAD A ANTIF\u00daNGICOS. $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667495",
    "description": "MICROAGREGADO PLAQUETARIOS P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667499",
    "description": "MICROARRAYS - ESTUDIO GENETICO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667520",
    "description": "MICROSPORIDIA INVESTIGACI\u00d3N $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667529",
    "description": "MIELOPEROXIDASA, (Citoqu\u00edmica) $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667550",
    "description": "MIOGLOBINA - urinaria $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667636",
    "description": "MuSK, Ac. Anti- $188,320.00",
    "price_hidden": "$190,080.00",
    "coseguro": "$192,060.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667640",
    "description": "MUTACIONES EN EL DOMINIO TK DEL TRANSCRIPTO BCR-AB $428,000.00",
    "price_hidden": "$432,000.00",
    "coseguro": "$436,500.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667648",
    "description": "MYCOAVIUM COMPLEX - PCR P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667660",
    "description": "MYCOBACTERIA AT\u00cdPICA - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667674",
    "description": "MYCOBACTERIUM TUBERCULOSIS, en LCR P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667734",
    "description": "MYCOPLASMA PNEUMONIAE, cultivo P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667736",
    "description": "MYCOPLASMA PNEUMONIAE - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667775",
    "description": "NEONATAL SCREENENG AMPLIADO POR ESPECTROMETRIA DE MASA EN TANDEM P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667810",
    "description": "NEUTR\u00d3FILOS, ACTIVIDAD FAGOCITARIA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667836",
    "description": "NITR\u00d3GENO NO PROTEICO $2,568.00",
    "price_hidden": "$2,592.00",
    "coseguro": "$2,619.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667840",
    "description": "NMDA, Ac. IgG Anti- RECEPTOR - LCR $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667841",
    "description": "NMDA, Ac. IgG Anti- RECEPTOR - sangre $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667849",
    "description": "NOROVIRUS $95,016.00",
    "price_hidden": "$95,904.00",
    "coseguro": "$96,903.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667871",
    "description": "NUCLEOLO, Ac. Anti- $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667926",
    "description": "OSMOLALIDAD - urinaria $4,280.00",
    "price_hidden": "$4,320.00",
    "coseguro": "$4,365.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667964",
    "description": "OXICODON A - urinaria $34,240.00",
    "price_hidden": "$34,560.00",
    "coseguro": "$34,920.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667973",
    "description": "p53 Ac. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "667982",
    "description": "p53 mutante P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668024",
    "description": "PARA AMINOFENOL P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668110",
    "description": "PARACOCCIDIOIDES BRASILIENSIS, Ac. IgG Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668115",
    "description": "PARACOCCIDIOIDES BRASILIENSIS, Ac. IgM Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668158",
    "description": "PAR\u00c1SITOS - biopsias o l\u00edquidos de punci\u00f3n $21,400.00",
    "price_hidden": "$21,600.00",
    "coseguro": "$21,825.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668204",
    "description": "PAROTIDITIS, Ac. solubles P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668212",
    "description": "PAROTIDITIS, Ag. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668221",
    "description": "PAROTIDITIS, Ag. en LCR P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668241",
    "description": "PARVOVIRUS B19 - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668250",
    "description": "PENFIGOIDE Ac. Anti- (MEMBRANA BASAL EN PIEL Ac. Anti-) $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668286",
    "description": "PEPTIDO INTESTINAL VASOACTIVO (VIP) $188,320.00",
    "price_hidden": "$190,080.00",
    "coseguro": "$192,060.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668298",
    "description": "PERFIL LIP\u00cdDICO $9,416.00",
    "price_hidden": "$9,504.00",
    "coseguro": "$9,603.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668304",
    "description": "PERFIL MINERAL - en cabello $171,200.00",
    "price_hidden": "$172,800.00",
    "coseguro": "$174,600.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668306",
    "description": "PERFIL MINERAL - en orina $171,200.00",
    "price_hidden": "$172,800.00",
    "coseguro": "$174,600.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668375",
    "description": "PLAQUETAS, Ac. Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668379",
    "description": "PLASMA RICO EN PLAQUETAS, PREPARACI\u00d3N DE (PRP) $102,720.00",
    "price_hidden": "$103,680.00",
    "coseguro": "$104,760.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668418",
    "description": "PM-1, Ac. Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668426",
    "description": "PNEUMOCYSTIS CARINII, IFD $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668446",
    "description": "POLICLOROBIFENILOS $38,520.00",
    "price_hidden": "$38,880.00",
    "coseguro": "$39,285.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668450",
    "description": "POLIMORFISMO IL 28B $266,216.00",
    "price_hidden": "$268,704.00",
    "coseguro": "$271,503.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668463",
    "description": "POLIOMAVIRUS BK, Carga viral - sangre u orina $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668464",
    "description": "POLIOMAVIRUS BK, PCR - sangre u orina $94,160.00",
    "price_hidden": "$95,040.00",
    "coseguro": "$96,030.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668466",
    "description": "POLIOMAVIRUS JC, Carga viral - sangre u orina $128,400.00",
    "price_hidden": "$129,600.00",
    "coseguro": "$130,950.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668467",
    "description": "POLIOMAVIRUS JC, PCR - LCR $90,736.00",
    "price_hidden": "$91,584.00",
    "coseguro": "$92,538.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668469",
    "description": "POLIQUISTOSIS RENAL - PCR P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668493",
    "description": "PORFIRINAS TOTALES - eritrocitarias $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668537",
    "description": "POTASIO - eritrocitario P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668563",
    "description": "PROCALCITONINA $64,200.00",
    "price_hidden": "$64,800.00",
    "coseguro": "$65,475.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668571",
    "description": "PROINSULINA - plasm\u00e1tica P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668627",
    "description": "PROTE\u00cdNA del EPID\u00cdDIMO HUMANO 4 (HE4) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668656",
    "description": "PROTEINASA 3 (PR3), Ac. Anti- $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668682",
    "description": "PROTOPORFIRINA ERITROCITARIA LIBRE (FEP), ZINC PROTOPORFIRINA (ZPP o ZP) $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668710",
    "description": "PSEUDOMONAS, Ac. Anti- $59,920.00",
    "price_hidden": "$60,480.00",
    "coseguro": "$61,110.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668800",
    "description": "RECEPTOR de FSH, Ac. Anti- (RFSH) $102,720.00",
    "price_hidden": "$103,680.00",
    "coseguro": "$104,760.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668845",
    "description": "RETINA, Ac. Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668878",
    "description": "RINOVIRUS, Ag. $18,832.00",
    "price_hidden": "$19,008.00",
    "coseguro": "$19,206.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668882",
    "description": "RISPERIDONA $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668888",
    "description": "RNA, Ac. Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668918",
    "description": "ROSA de BENGALA $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668947",
    "description": "SACAROSA $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668964",
    "description": "SALIVA, Ex. F\u00edsico-Qu\u00edmico P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "668977",
    "description": "SANGRIA, TIEMPO DE - M\u00e9todo de Ivy $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669007",
    "description": "SCORE de MOCO $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669026",
    "description": "SENSIBILIDAD ALIMENTARIA, PANEL de Ac. IgG Anti- $68,480.00",
    "price_hidden": "$69,120.00",
    "coseguro": "$69,840.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669054",
    "description": "SIFILIS (ELISA) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669055",
    "description": "SIFILIS (ELISA RECOMBINANTE) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669103",
    "description": "S\u00cdNDROMES MIELOPROLIFERATIVOS -FENOTIPIFICACI\u00d3N.- Jak 2 (JANUS QUINASA $256,800.00",
    "price_hidden": "$259,200.00",
    "coseguro": "$261,900.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669104",
    "description": "S\u00cdNDROMES MIELOPROLIFERATIVOS -FENOTIPIFICACI\u00d3N.- MPL (cada mutaci\u00f3n) $256,800.00",
    "price_hidden": "$259,200.00",
    "coseguro": "$261,900.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669129",
    "description": "STAPHYLOCOCCUS AUREUS METICILINO RESISTENTE -PCR o similar $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669170",
    "description": "STREPTOCOCCUS PNEUMONIAE - PCR $77,040.00",
    "price_hidden": "$77,760.00",
    "coseguro": "$78,570.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669180",
    "description": "STREPTOZYME, TEST (ESTREPTOZIMA) $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669187",
    "description": "SUBUNIDAD Alfa HIPOFISIARIA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669195",
    "description": "SUCCINIL ACETONA - urinaria P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669212",
    "description": "SUCROSA, TEST DE $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669229",
    "description": "SULFAHEMOGLOBINA POR COOXIMETRIA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669238",
    "description": "SULFATOS - urinarios $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669265",
    "description": "SUSTANCIA INTERCELULAR Ac Anti $51,360.00",
    "price_hidden": "$51,840.00",
    "coseguro": "$52,380.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669270",
    "description": "TAENIA SOLIUM - Ac. Anti- IgG $42,800.00",
    "price_hidden": "$43,200.00",
    "coseguro": "$43,650.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669281",
    "description": "TALASEMIAS, Beta-Mutaciones P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669293",
    "description": "TALIO - pelo P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669358",
    "description": "TEST DE NUGENT - s\u00e9rico P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669383",
    "description": "TESTOSTERONA - urinaria $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669434",
    "description": "TIOSULFATOS - urinarios $6,848.00",
    "price_hidden": "$6,912.00",
    "coseguro": "$6,984.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669464",
    "description": "TIROGLOBULINA - l\u00edquido de punci\u00f3n (TG LP) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669486",
    "description": "TITULACI\u00d3N de ANTICUERPO VIII (Met..Biol.) P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669494",
    "description": "TOXINA BOTUL\u00cdNICA, Ac. P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669565",
    "description": "TOXOPLASMOSIS, Ac. IgA ISAGA Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669597",
    "description": "t-PA INMUNOL\u00d3GICO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669644",
    "description": "TREPONEMA PALLIDUM, FTA ABS, Ac. IgM Anti- $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669653",
    "description": "TRICHOMONAS, Cultivo para- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669657",
    "description": "TRICLOROETANOL $10,272.00",
    "price_hidden": "$10,368.00",
    "coseguro": "$10,476.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669682",
    "description": "TRIPSINA, Ac. Anti- P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669768",
    "description": "UROPORFIRINAS - materia fecal $12,840.00",
    "price_hidden": "$12,960.00",
    "coseguro": "$13,095.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669780",
    "description": "VACUNA LINFOCITARIA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669787",
    "description": "VAGINAL, BALANCE DEL CONTENIDO (BACOVA) $5,136.00",
    "price_hidden": "$5,184.00",
    "coseguro": "$5,238.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669790",
    "description": "VANADIO, plasm\u00e1tico o uriniario. $17,120.00",
    "price_hidden": "$17,280.00",
    "coseguro": "$17,460.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669870",
    "description": "VISCOSIDAD PLASM\u00c1TICA P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669898",
    "description": "VITAMINA C (plaquetaria) $25,680.00",
    "price_hidden": "$25,920.00",
    "coseguro": "$26,190.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669905",
    "description": "VITAMINA D (1,25-DIHIDROXICOLECALCIFEROL O CALCITRIOL - 1,25-VITAMINA D $64,200.00",
    "price_hidden": "$64,800.00",
    "coseguro": "$65,475.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669909",
    "description": "VITAMINA D2 + D3 (ERGOCALCIFEROL + 25-HIDROXICALCIFEROL O $34,240.00",
    "price_hidden": "$34,560.00",
    "coseguro": "$34,920.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669930",
    "description": "VLDL-COLESTEROL, LIPOPROTEINA DE MUY BAJA DENSIDAD. $3,424.00",
    "price_hidden": "$3,456.00",
    "coseguro": "$3,492.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669939",
    "description": "XANTINA $8,560.00",
    "price_hidden": "$8,640.00",
    "coseguro": "$8,730.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669947",
    "description": "YERSINIA ENTEROCOLITICA, CULTIVO P/P",
    "price_hidden": "",
    "coseguro": "P/P",
    "bonos": "",
    "source": "BIOQUIMICA"
  },
  {
    "code": "669978",
    "description": "ZIKA, virus (PCR) $85,600.00",
    "price_hidden": "$86,400.00",
    "coseguro": "$87,300.00",
    "bonos": "",
    "source": "BIOQUIMICA"
  }
];
