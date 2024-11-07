export interface Underpass {
  id: string;
  online: string;
  nome_sottopasso: string;
  immagine: string;
  immagine_ios: string;
  planimetria: string;
  livello_allarme: string;
  testo_allarme: string;

  // Sensors
  valore_s1: string;
  nome_s1: string;
  stato_s1: string;
  livello_s1: string;
  data_s1: string;

  valore_s2: string;
  nome_s2: string;
  stato_s2: string;
  livello_s2: string;
  data_s2: string;

  valore_s3: string;
  nome_s3: string;
  stato_s3: string;
  livello_s3: string;
  data_s3: string;

  // Pluviometro
  valore_pl: string;
  nome_pl: string;
  stato_pl: string;
  livello_pl: string;
  data_pl: string;

  // Unita' di misura
  unita_misura_s: string;
  unita_misura_pl: string;
}
