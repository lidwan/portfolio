const projects = [
    {
        title:"Makanak Jo",
        description:"A production full-stack Room sharing platform for Jordan, built with a containerized Next.js/Express/PostGIS stack on a locked-down Hetzner VPS, Cloudflare Tunnel public access, private NetBird administration, and GitLab CI/CD for testing, Docker image builds, registry pushes, and commit-SHA deployments.",
        ghLink:"https://lsblk.dev/posts/building-makanak-jo-from-full-stack-app-to-production-deployment",
        ghLabel:"Read Blog Post",
        liveLink:"https://www.makanakjo.com",
    },
    {
        title:"Highly Available Recursive DNS Resolver on AWS with Terraform",
        description:"A Terraform-managed AWS infrastructure project that provisions a highly available recursive DNS resolver with Unbound, an EC2 Auto Scaling Group, an internet-facing Network Load Balancer, and CloudWatch Logs Insights analytics. It deploys three Amazon Linux 2023 resolver instances across three Availability Zones, supports UDP and TCP DNS on port 53, and centralizes query logs for observability.",
        ghLink:"https://lsblk.dev/posts/building-a-highly-available-dns-resolver-on-aws-with-unbound-auto-scaling-nlb-and-cloudwatch",
        ghLabel:"Read Blog Post"
    },
    {
        title:"Self-Hosted Hybrid Cloud Infrastructure Platform",
        description:"Built and maintain a hybrid Linux infrastructure spanning Proxmox VE, Ubuntu VMs, LXC containers, and OCI VPS instances, running 25+ containerized services across on-premises and cloud environments. Designed and operate semi-public DNS and CalDAV/CardDAV services using AdGuard Home, DNS-over-TLS, Cloudflare Tunnel, client-specific access controls, geographic filtering, and administrative access restricted to a self-hosted NetBird zero-trust network. Connected home and cloud infrastructure through NetBird using private subnet routing, exit nodes, access policies, and overlay-only SSH, while administering Linux hosts, virtualization, containers, DNS, networking, storage, and service troubleshooting across the environment.",
        ghLink:"https://lsblk.dev/posts/self-hosting-the-subscription-detox-i-didnt-know-i-needed",
        ghLabel:"Read Blog Post"
    }
];

export default projects
