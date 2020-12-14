resource "aws_route53_zone" "primary" {
    name = "example.com"
}

resource "aws_route53_record" "www" {
    zone_id = aws_route53_zone.primary.zone_id
    name    = "www.example.com"
    type    = "CNAME"
    ttl     = "300"
    records = [aws_eip.lb.public_ip]
}