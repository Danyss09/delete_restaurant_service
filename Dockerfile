# 1️⃣ Imagen base oficial de Node.js
FROM node:18

# 2️⃣ Establecer el directorio de trabajo
WORKDIR /app

# 3️⃣ Copiar package.json y package-lock.json
COPY package*.json ./

# 4️⃣ Instalar dependencias
RUN npm install

# 5️⃣ Copiar el resto del código de la aplicación
COPY . .

# 6️⃣ Exponer el puerto definido en .env (o 3000 por defecto)
EXPOSE 3000

# 7️⃣ Copiar el archivo .env al contenedor (asegúrate de tenerlo en tu proyecto y que no esté en .gitignore)
COPY .env .env

# 8️⃣ Definir el comando para iniciar el servidor
CMD ["node", "app.js"]
