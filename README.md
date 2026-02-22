# 🦞 Hello Claw - Backend

EC2 (t3.micro) 에서 돌아가는 Node.js + Express 백엔드.

## API Endpoints

| Method | Path | 설명 |
|--------|------|------|
| GET | `/api/health` | 서버 상태 확인 |
| GET | `/api/echo?msg=hello` | Echo 테스트 |
| GET | `/api/random` | 랜덤 팩트 |

## 로컬 실행

```bash
npm install
npm start        # port 80
PORT=3000 npm start  # 다른 포트
```

## 인프라

- **EC2**: t3.micro (ap-northeast-2)
- **OS**: Amazon Linux 2023
- **CloudFront**: `/api/*` → EC2 프록시
