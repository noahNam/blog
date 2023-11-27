---
slug: fastapi-init
title: '[Fastapi] init'
authors: noahNam
tags: [fastapi]
---

# fastapi init

## fastapi로 실습을 해보기로 한다.

## 가상환경 구성

- `poetry`를 사용하여 가상환경을 구성한다.

    ```bash
    $ poetry init
    ```

- `fastapi` package 설치한다. 추가적으로 `uvicorn` 패키지도 설치해 준다.

    ```bash
    $ poetry add fastapi
    $ poetry add uvicorn
    ```

- what is uvicorn? [링크](./fastapi-uvicorn)

- `main.py` 작성

    ```python
    from fastapi import FastAPI

    app = FastAPI()

    @app.get("/")
    def main():
        return {"Hello": "World"}
    ```
- uvicorn 실행
    
    ```bash
    $ uvicorn main:app --reload

    ```    

- 확인

  ![](./../../static/img/fastapi-init/1.png)