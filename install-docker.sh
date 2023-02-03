sudo yum update
sudo yum search docker
sudo yum info docker
sudo yum install docker
sudo usermod -a -G docker ec2-user
id ec2-user
newgrp docker
sudo yum install python3-pip
sudo pip3 install docker-compose # with root access
pip3 install --user docker-compose # without root access for security reasons
sudo systemctl enable docker.service
sudo systemctl start docker.service
sudo systemctl status docker.service
