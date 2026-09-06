// Configuração do Supabase — projeto "ctdo-relatorio-obras"
// Este projeto é separado do Supabase usado pelo sistema de estoque (ctosm-estoque).
//
// A "anon key" abaixo é uma chave pública (safe para ficar no código do
// front-end / GitHub Pages). O controle de acesso real é feito pelas
// políticas de RLS configuradas no banco (liberado para leitura/escrita,
// já que este é um sistema interno sem tela de login).
window.SUPABASE_URL = "https://vvcyfdgadvacfiqlltly.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2Y3lmZGdhZHZhY2ZpcWxsdGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3MjMyNTYsImV4cCI6MjEwNDI5OTI1Nn0.3jX0wWv0uHqOKEPcogQmqxDOD3NvOrpK-h8FRtL4llE";
window.SUPABASE_BUCKET = "arquivos-obras";
