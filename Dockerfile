# ============================================
# 🐳 DOCKERFILE — The Recipe for Your Image
# ============================================

# STEP 1: Start from the official Nginx image
# "alpine" is a tiny Linux distro (~5MB), making our image small & fast
# Think of this as: "I want a box that already has a web server inside"
FROM nginx:alpine

# STEP 2: Remove the default Nginx welcome page
# Nginx comes with a "Welcome to Nginx" page — we don't need it
RUN rm -rf /usr/share/nginx/html/*

# STEP 3: Copy our custom Nginx config
# This tells Nginx to serve gender.html as the homepage (not index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# STEP 4: Copy YOUR project files into the container
# Everything in this folder gets placed into Nginx's web directory
COPY . /usr/share/nginx/html

# STEP 5: Tell Docker this container uses port 80
# This is documentation — it tells other developers (and Docker) which port to use
EXPOSE 80

# STEP 6: Start Nginx when the container launches
# "daemon off" keeps Nginx in the foreground so Docker can manage it
CMD ["nginx", "-g", "daemon off;"]
