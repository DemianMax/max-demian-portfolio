# 🚀 Instruções de Deploy para GitHub Pages

## Passos para Configurar o Deploy:

### 1. **Configurar o Repositório**
1. Vá para **Settings** do seu repositório no GitHub
2. Na seção **Pages** (menu lateral esquerdo):
   - **Source**: Selecione "GitHub Actions"
   - **NÃO** selecione "Deploy from a branch"

### 2. **Fazer o Deploy**
1. Faça commit e push das alterações para a branch `main`
2. Vá para a aba **Actions** do repositório
3. Aguarde o workflow "Deploy to GitHub Pages" terminar
4. O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]`

### 3. **Verificar o Deploy**
- ✅ O workflow deve aparecer na aba Actions
- ✅ Deve mostrar status "✓" quando concluído
- ✅ O site deve estar acessível no link fornecido

## 🔧 Solução de Problemas:

### Se o workflow falhar:
1. Verifique se as **Pages** estão habilitadas nas configurações
2. Certifique-se de que a source está como "GitHub Actions"
3. Verifique os logs na aba Actions para erros específicos

### Se o site não carregar:
1. Aguarde alguns minutos após o deploy
2. Verifique se todas as imagens estão no diretório `public/`
3. Limpe o cache do navegador

## 📝 Notas Importantes:
- O deploy acontece automaticamente a cada push na branch `main`
- O site é estático, então mudanças podem levar alguns minutos para aparecer
- Certifique-se de que o repositório é público ou tem GitHub Pages habilitado
